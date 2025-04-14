from TTS.api import TTS
import os
import time
from datetime import datetime
from flask import current_app
import requests

# Load once (like a singleton)
tts = TTS(model_name="tts_models/en/vctk/vits", progress_bar=False, gpu=False)
tts_model = None

def generate_speech(text, voice_style="neutral"):
    provider = current_app.config["TTS_PROVIDER"]
    folder = current_app.config["AUDIO_FOLDER"]
    os.makedirs(folder, exist_ok=True)
    cleanup_old_audio(folder)

    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    file_path = os.path.join(folder, f"output_{timestamp}.wav")

    if provider == "elevenlabs":
        generate_with_elevenlabs(text, file_path)
    else:
        generate_with_coqui(text, file_path)

    return file_path


def generate_with_coqui(text, file_path):
    global tts_model
    if not tts_model:
        from TTS.api import TTS
        tts_model = TTS(model_name="tts_models/en/vctk/vits", progress_bar=False, gpu=False)
    tts_model.tts_to_file(text=text, file_path=file_path)


def generate_with_elevenlabs(text, file_path):
    import base64

    api_key = current_app.config["ELEVENLABS_API_KEY"]
    voice_id = current_app.config["ELEVENLABS_VOICE_ID"]

    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    headers = {
        "xi-api-key": api_key,
        "Content-Type": "application/json"
    }
    payload = {
        "text": text,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }

    response = requests.post(url, json=payload, headers=headers)
    if response.status_code == 200:
        with open(file_path, "wb") as f:
            f.write(response.content)
    else:
        raise Exception(f"ElevenLabs API Error: {response.status_code} - {response.text}")
    """Remove files older than max_age_seconds (default: 10 mins)."""
    now = time.time()
    for filename in os.listdir(folder):
        file_path = os.path.join(folder, filename)
        if os.path.isfile(file_path):
            file_age = now - os.path.getmtime(file_path)
            if file_age > max_age_seconds:
                try:
                    os.remove(file_path)
                except Exception as e:
                    print(f"Failed to delete {file_path}: {e}")