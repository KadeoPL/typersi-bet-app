from fastapi import APIRouter, Depends, HTTPException
from supabase import Client
from api.deps import get_supabase
from api.schemas.user import LoginRequest, LoginResponse, User, UserPoints
import logging

router = APIRouter()

logger = logging.getLogger(__name__)


@router.post("/login", response_model=LoginResponse)
def login(data: LoginRequest, supabase: Client = Depends(get_supabase)):
    try:
        res = supabase.table("users").select("id, password").eq("login", data.login).execute()

        if not res.data:
            raise HTTPException(status_code=404, detail="Invalid login")

        user = res.data[0]

        if user["password"] != data.password:
            raise HTTPException(status_code=404, detail="Invalid password")

        return {
            "message": "OK",
            "login": data.login,
            "id": user["id"],
        }

    except HTTPException:
        raise
    except Exception:
        logger.exception("Error in login")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.get("", response_model=list[User])
def get_users(supabase: Client = Depends(get_supabase)):
    try:
        res = supabase.table(
            "users"
        ).select(
            "login, points, correct_exact_result"
        ).order(
            "points", desc=True
        ).order(
            "correct_exact_result", desc=True
        ).execute()

        return res.data

    except Exception:
        logger.exception("Error fetching users")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.get("/{user_id}/points", response_model=UserPoints)
def get_user_points(user_id: int, supabase: Client = Depends(get_supabase)):
    try:
        res = supabase.table("users").select("points").eq("id", user_id).execute()

        if not res.data:
            raise HTTPException(status_code=404, detail="User not found")

        return res.data[0]

    except HTTPException:
        raise
    except Exception:
        logger.exception("Error fetching user points")
        raise HTTPException(status_code=500, detail="Internal Server Error")
