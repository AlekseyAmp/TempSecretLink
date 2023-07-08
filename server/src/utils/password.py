import hashlib


def hash_password(password: str) -> str:
    if password is None:
        return password

    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_password


def verify_password(password: str, hashed_password: str) -> bool:
    if password is None:
        return password == hashed_password

    hashed_input_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_input_password == hashed_password
