from redis_om import (
    JsonModel,
    Field,
)
from typing import Optional


class Secret(JsonModel):
    message: str
    password: Optional[str] = Field(default=None)
    hashed_link: str = Field(index=True)
