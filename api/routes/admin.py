from fastapi import APIRouter, Depends, HTTPException
from supabase import Client
from api.deps import get_supabase, require_auth
from api.schemas.match import RoundInput
from api.schemas.team import TeamGroup
from api.utils.utils import normalize_country_name, convert_to_warsaw
import logging

router = APIRouter()

logger = logging.getLogger(__name__)


@router.post("/matches")
def post_matches(
    data: RoundInput,
    supabase: Client = Depends(get_supabase),
    _: None = Depends(require_auth),
):
    try:
        for match in data.matches:
            team_one_id = supabase.table("teams").select("id").eq("name", match.team1).execute().data[0]["id"]
            team_two_id = supabase.table("teams").select("id").eq("name", match.team2).execute().data[0]["id"]
            date, time = convert_to_warsaw(match.date, match.time)
            supabase.table("matches").insert({
                "team_one": team_one_id,
                "team_two": team_two_id,
                "date": date,
                "time": time,
                "group": match.group,
            }).execute()

        return {"status": "ok"}

    except Exception:
        logger.exception("Error in post_matches")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.post("/teams")
def post_teams(
    data: list[TeamGroup],
    supabase: Client = Depends(get_supabase),
    _: None = Depends(require_auth),
):
    try:
        seen = set()
        to_insert = []

        for group in data:
            for team in group.drużyny:
                if team in seen:
                    continue

                flag_source = f"public/images/flags/{normalize_country_name(team)}.jpg"

                seen.add(team)

                to_insert.append({
                    "name": team,
                    "flag": flag_source
                })

        if to_insert:
            supabase.table("teams").insert(to_insert).execute()

        return {
            "inserted": len(to_insert),
            "status": "ok"
        }

    except Exception:
        logger.exception("Error in post_teams")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.post("/result")
def update_result(
    data: dict,
    supabase: Client = Depends(get_supabase),
    _: None = Depends(require_auth),
):
    try:
        match_id = data["match_id"]
        team_one_goals = data["team_one_goals"]
        team_two_goals = data["team_two_goals"]

        result_value = (
            1 if team_one_goals > team_two_goals else
            2 if team_one_goals < team_two_goals else
            0
        )

        supabase.table("matches").update({
            "team_one_goals": team_one_goals,
            "team_two_goals": team_two_goals,
            "result": result_value,
        }).eq("id", match_id).execute()

        predictions = supabase.table("predictions").select(
            "user_id",
            "result",
            "team_one_goals",
            "team_two_goals",
        ).eq("match_id", match_id).execute().data

        for p in predictions:
            user_id = p["user_id"]

            points = 0
            exact = 0

            if p["result"] == result_value:
                points += 1

            if p["team_one_goals"] == team_one_goals and p["team_two_goals"] == team_two_goals:
                points += 3
                exact += 1

            user = supabase.table("users").select("points, correct_exact_result").eq("id", user_id).execute().data[0]

            supabase.table("users").update({
                "points": user["points"] + points,
                "correct_exact_result": user["correct_exact_result"] + exact,
            }).eq("id", user_id).execute()

        return {"status": "ok"}

    except Exception:
        logger.exception("Error in update_result")
        raise HTTPException(status_code=500, detail="Internal Server Error")
