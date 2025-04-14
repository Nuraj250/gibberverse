import os
import time
from datetime import datetime
from flask import current_app
from gtts import gTTS

def cleanup_old_audio(folder, max_age_seconds=600):
    """Delete audio files older than max_age_seconds (default: 10 mins)."""
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

def generate_speech(text, _style="neutral"):
    """
    Generate speech using gTTS.
    Note: gTTS doesn't support voice style — `_style` is ignored for now.
    """
    folder = current_app.config["AUDIO_FOLDER"]
    os.makedirs(folder, exist_ok=True)

    cleanup_old_audio(folder)

    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    file_path = os.path.join(folder, f"output_{timestamp}.mp3")

    tts = gTTS(text=text, lang="en")
    tts.save(file_path)

    return file_path
