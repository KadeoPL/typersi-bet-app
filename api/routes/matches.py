from fastapi import APIRouter, Depends, HTTPException, Query, Response
from supabase import Client
from api.deps import get_supabase
from api.schemas.match import Match
import logging

router = APIRouter()

logger = logging.getLogger(__name__)


@router.get("", response_model=list[Match])
def get_matches(
    response: Response,
    limit: int = Query(20, ge=1, le=100),
    offset: int = Query(0, ge=0),
    supabase: Client = Depends(get_supabase),
):
    try:
        res = supabase.table("matches").select(
            "id, team_one:teams!matches_team_one_fkey(name, flag), team_two:teams!matches_team_two_fkey(name, flag), date, time, team_one_goals, team_two_goals, group"
        ).eq("finished", False).order("id").range(offset, offset + limit - 1).execute()

        response.headers["Cache-Control"] = "s-maxage=60"

        return res.data

    except Exception:
        logger.exception("Error fetching matches")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.get("/finished", response_model=list[Match])
def get_finished_matches(supabase: Client = Depends(get_supabase)):
    try:
        res = supabase.table(
            "matches"
        ).select(
            "id, "
            "team_one:teams!matches_team_one_fkey(name, flag), "
            "team_two:teams!matches_team_two_fkey(name, flag), "
            "date, "
            "time, "
            "team_one_goals, "
            "team_two_goals, "
            "group, "
        ).eq("finished", True).order("id").execute()

        return res.data

    except Exception:
        logger.exception("Error fetching finished matches")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.get("/{match_id}", response_model=Match)
def get_match(match_id: int, supabase: Client = Depends(get_supabase)):
    try:
        res = supabase.table(
            "matches"
        ).select(
            "id, "
            "team_one:teams!matches_team_one_fkey(name, flag), "
            "team_two:teams!matches_team_two_fkey(name, flag), "
            "date, "
            "time, "
            "team_one_goals, "
            "team_two_goals, "
            "group, "
        ).eq("id", match_id).execute()

        if not res.data:
            raise HTTPException(status_code=404, detail="Match not found")

        return res.data[0]

    except HTTPException:
        raise
    except Exception:
        logger.exception("Error fetching match")
        raise HTTPException(status_code=500, detail="Internal Server Error")
