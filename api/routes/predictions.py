from fastapi import APIRouter, Depends, HTTPException
from supabase import Client
from api.deps import get_supabase
from api.schemas.prediction import PredictionCreate, MatchPrediction
import logging
from datetime import datetime
import pytz

router = APIRouter()

logger = logging.getLogger(__name__)


@router.post("")
def post_prediction(
    data: PredictionCreate,
    supabase: Client = Depends(get_supabase),
):
    try:
        match = supabase.table("matches").select("date, time").eq("id", data.match_id).execute().data

        if not match:
            raise HTTPException(status_code=404, detail="Match not found")

        timezone = pytz.timezone("Europe/Warsaw")
        match_dt = datetime.strptime(f"{match[0]['date']} {match[0]['time']}", "%Y-%m-%d %H:%M:%S")
        match_dt = timezone.localize(match_dt)

        if datetime.now(timezone) >= match_dt:
            raise HTTPException(status_code=403, detail="Betting closed")

        payload = {
            "match_id": data.match_id,
            "user_id": data.user_id,
            "team_one_goals": data.team_one_goals,
            "team_two_goals": data.team_two_goals,
            "result": data.result,
        }

        res = supabase.table("predictions").upsert(payload, on_conflict="match_id,user_id").execute()

        return res.data

    except HTTPException:
        raise
    except Exception:
        logger.exception("Error in post_prediction")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.get("/{user_id}")
def get_predictions(user_id: int, supabase: Client = Depends(get_supabase)):
    try:
        res = supabase.table("predictions").select("match_id, result, team_one_goals, team_two_goals").eq("user_id", user_id).execute()
        return res.data

    except Exception:
        logger.exception("Error fetching predictions")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.get("/match/{match_id}", response_model=list[MatchPrediction])
def get_match_predictions(match_id: int, supabase: Client = Depends(get_supabase)):
    try:
        match = supabase.table("matches").select("date, time").eq("id", match_id).execute().data

        if not match:
            raise HTTPException(status_code=404, detail="Match not found")

        timezone = pytz.timezone("Europe/Warsaw")
        match_dt = datetime.strptime(f"{match[0]['date']} {match[0]['time']}", "%Y-%m-%d %H:%M:%S")
        match_dt = timezone.localize(match_dt)

        if datetime.now(timezone) < match_dt:
            raise HTTPException(status_code=403, detail="Match not started")

        res = supabase.table(
            "predictions"
        ).select(
            "user_id:users!predictions_user_id_fkey(login), "
            "team_one_goals, "
            "team_two_goals, "
            "result"
        ).eq("match_id", match_id).execute()

        return res.data

    except HTTPException:
        raise
    except Exception:
        logger.exception("Error fetching match predictions")
        raise HTTPException(status_code=500, detail="Internal Server Error")
