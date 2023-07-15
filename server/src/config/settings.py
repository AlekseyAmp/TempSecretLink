from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os


load_dotenv()


class Settings(BaseSettings):
    REDIS_HOSTNAME: str = os.environ["REDIS_HOSTNAME"]
    REDIS_PORT: str = os.environ["REDIS_PORT"]


settings = Settings()
