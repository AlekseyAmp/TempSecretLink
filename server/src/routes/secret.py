from fastapi import APIRouter
from typing import Optional

import services.secret as SecretService


router = APIRouter()


@router.post("/secret/create")
async def create_secret(text: str, expire_time: int,
                        password: Optional[str] = None):
    return await SecretService.create_secret(text, expire_time, password)


@router.get("/secret")
async def get_secret(link: str,
                     password: Optional[str] = None):
    return await SecretService.get_secret(link, password)
