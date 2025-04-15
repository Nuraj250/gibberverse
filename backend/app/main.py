from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints import ai, gibberlink, audio

app = FastAPI(
    title="Gibberverse API",
    version="1.0.0",
    description="Multi-agent audio communication backend"
)

# ✅ Add this CORS block
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or use ["*"] for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Include routers after CORS
app.include_router(ai.router, prefix="/api/v1/ai", tags=["AI"])
app.include_router(gibberlink.router, prefix="/api/v1/gibber", tags=["Gibberlink"])
app.include_router(audio.router, prefix="/api/v1/audio", tags=["Audio"])
