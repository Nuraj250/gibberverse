from gtts import gTTS
import os
import uuid

AUDIO_DIR = "static/audio"
os.makedirs(AUDIO_DIR, exist_ok=True)

def text_to_speech(text: str) -> str:
    filename = f"{uuid.uuid4().hex}.mp3"
    path = os.path.join(AUDIO_DIR, filename)
    gTTS(text).save(path)
    return f"/{path}"
