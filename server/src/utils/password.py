import hashlib


def hash_password(password: str | None) -> str | None:
    if password is None:
        return None

    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_password


def verify_password(password: str | None, hashed_password: str) -> bool:
    if password is None:
        return password == hashed_password

    hashed_input_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_input_password == hashed_password
