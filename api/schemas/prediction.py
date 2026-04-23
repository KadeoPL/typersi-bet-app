from pydantic import BaseModel, Field


class PredictionCreate(BaseModel):
    match_id: int
    user_id: int
    team_one_goals: int = Field(ge=0)
    team_two_goals: int = Field(ge=0)
    result: int | None = Field(default=None, ge=0, le=2)


class Prediction(BaseModel):
    match_id: int
    user_id: int
    team_one_goals: int | None
    team_two_goals: int | None
    result: int | None


class PredictionUser(BaseModel):
    login: str


class MatchPrediction(BaseModel):
    user_id: PredictionUser
    team_one_goals: int | None
    team_two_goals: int | None
    result: int | None


class PredictionUpdate(BaseModel):
    team_one_goals: int | None = Field(default=None, ge=0)
    team_two_goals: int | None = Field(default=None, ge=0)
    result: int | None = Field(default=None, ge=0, le=2)
