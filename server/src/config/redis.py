from redis_om import get_redis_connection

from config.settings import settings

redis_client = get_redis_connection(
    host=settings.REDIS_HOSTNAME, port=settings.REDIS_PORT
)
