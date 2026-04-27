import os
from fastapi import Header, HTTPException
from supabase import create_client, Client
from api.config import SUPABASE_URL, SUPABASE_KEY

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
SECRET_KEY = os.getenv("SECRET_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("Missing SUPABASE_URL or SUPABASE_KEY")


supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


def get_supabase() -> Client:
    return supabase


def require_auth(authorization: str = Header(default=None, alias="Authorization")):
    if not authorization or authorization != SECRET_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")
