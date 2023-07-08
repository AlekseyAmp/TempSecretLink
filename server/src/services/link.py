from models.secret import Secret


def is_link_duplicate(hashed_link: str) -> bool:
    duplicate_link = Secret.find(
        Secret.hashed_link == hashed_link
    ).all()

    if duplicate_link:
        return True

    return False
