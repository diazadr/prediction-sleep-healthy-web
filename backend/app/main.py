from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import health, predict

app = FastAPI(title="ML Project API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to ML API"}

app.include_router(health.router)
app.include_router(predict.router)
