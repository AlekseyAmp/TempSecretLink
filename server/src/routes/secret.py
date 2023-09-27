from fastapi import APIRouter
from typing import Optional

import services.secret as SecretService


router = APIRouter()


@router.post("/secret/create")
async def create_secret(message: str, expire_time: int,
                        password: Optional[str] = None):
    return await SecretService.create_secret(message, expire_time, password)


@router.get("/secret")
async def get_secret(link: str, password: Optional[str] = None):
    return await SecretService.get_secret(link, password)
