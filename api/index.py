from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import matches, users, predictions, admin


app = FastAPI(
    title="Typersi API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://typersi-bet-app.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(matches.router, prefix="/api/matches")
app.include_router(users.router, prefix="/api/users")
app.include_router(predictions.router, prefix="/api/predictions")
app.include_router(admin.router, prefix="/api/admin")


@app.get("/health")
def health():
    return {"status": "ok"}
