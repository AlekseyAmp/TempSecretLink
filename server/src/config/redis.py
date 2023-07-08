from redis_om import get_redis_connection


redis_client = get_redis_connection(
    host='127.0.0.1', port='6379'
)
