from pydantic import BaseModel


class TeamGroup(BaseModel):
    grupa: str
    drużyny: list[str]
