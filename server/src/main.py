from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from redis_om import Migrator

from routes import (
    secret as SecretRouter,
)


app = FastAPI(title="TempSecretLink", version="0.1")

Migrator().run()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(SecretRouter.router, tags=['secret'], prefix='/api')


@app.get("/")
def root():
    return {
        "message": "Go to /docs"
    }
