from fastapi import HTTPException
from redis_om.model import NotFoundError

import hashlib
from typing import Optional

from models.secret import Secret
from utils.link import generate_link
from utils.password import hash_password, verify_password


async def create_secret(text: str,
                        expire_time: int,
                        password: Optional[str] = None) -> dict:

    if not text:
        raise HTTPException(
            status_code=400,
            detail="The field with the text is empty"
        )

    if expire_time > 604800:
        raise HTTPException(
            status_code=400,
            detail="The maximum duration of the link is one week"
        )

    link = generate_link()

    password = hash_password(password)

    secret = Secret(
        text=text,
        password=password,
        hashed_link=link["hashed_link"]
    )

    secret.save()
    secret.expire(expire_time)

    return {
        "link": link["link"]
    }


async def get_secret(link: str,
                     password: Optional[str] = None) -> dict:
    hashed_link = hashlib.sha256(link.encode()).hexdigest()

    try:
        secret = Secret.find(
            Secret.hashed_link == hashed_link
        ).first()

        if not verify_password(password, secret.password):
            raise HTTPException(
                status_code=403,
                detail="Invalid password"
            )

        Secret.delete(secret.pk)

        return {
            "text": secret.text
        }

    except NotFoundError:
        return {
            "error": "Such a link does not exist"
        }
