import secrets
import hashlib
import uuid

from services.link import is_link_duplicate
from utils.hash import create_hash


def generate_link() -> dict:
    random_string = secrets.token_urlsafe(16)
    unique_id = str(uuid.uuid4())

    link = 'http://localhost:3000/' + random_string + '/' + unique_id

    hashed_link = create_hash(link)

    if hashed_link is not None and is_link_duplicate(hashed_link):
        return generate_link()

    return {
        "link": link,
        "hashed_link": hashed_link
    }
