import hashlib


def create_hash(data: str | None) -> str | None:
    if data is None:
        return None

    hashed_data = hashlib.sha256(data.encode()).hexdigest()
    return hashed_data


def verify_hash(data: str | None, hashed_data: str) -> bool:
    if data is None:
        return data == hashed_data

    hashed_input_data = hashlib.sha256(data.encode()).hexdigest()
    return hashed_input_data == hashed_data