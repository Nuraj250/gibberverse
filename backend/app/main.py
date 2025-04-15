from fastapi import FastAPI
from app.api.v1.endpoints import ai, gibberlink, audio

app = FastAPI(
    title="Gibberverse API",
    version="1.0.0",
    description="Multi-agent audio communication backend"
)

# Register endpoints
app.include_router(ai.router, prefix="/api/v1/ai", tags=["AI"])
app.include_router(gibberlink.router, prefix="/api/v1/gibber", tags=["Gibberlink"])
app.include_router(audio.router, prefix="/api/v1/audio", tags=["Audio"])
