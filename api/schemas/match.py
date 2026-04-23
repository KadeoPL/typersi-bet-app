from pydantic import BaseModel


class Team(BaseModel):
    name: str


class Match(BaseModel):
    id: int
    team_one: Team
    team_two: Team
    date: str
    time: str
    team_one_goals: int | None
    team_two_goals: int | None
    group: str
    finished: bool = False


class MatchInput(BaseModel):
    date: str
    time: str
    group: str
    team1: str
    team2: str


class RoundInput(BaseModel):
    matches: list[MatchInput]
