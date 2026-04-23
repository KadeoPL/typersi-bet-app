from pydantic import BaseModel


class LoginRequest(BaseModel):
    login: str
    password: str


class LoginResponse(BaseModel):
    message: str
    login: str
    id: int


class User(BaseModel):
    login: str
    points: int
    correct_exact_result: int


class UserPoints(BaseModel):
    points: int
