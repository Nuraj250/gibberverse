import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    AUDIO_FOLDER = os.getenv("AUDIO_FOLDER", "audio_output")
    DEBUG = os.getenv("DEBUG", "true").lower() == "true"
    TTS_PROVIDER = os.getenv("TTS_PROVIDER", "coqui").lower()
    ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY", "")
    ELEVENLABS_VOICE_ID = os.getenv("ELEVENLABS_VOICE_ID", "your_voice_id")
