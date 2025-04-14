from flask import Blueprint, request, jsonify, send_file, current_app
from app.services.tts_service import generate_speech

tts_bp = Blueprint("tts", __name__, url_prefix="/api")

@tts_bp.route("/speak", methods=["POST"])
def speak():
    data = request.get_json()
    text = data.get("text")
    voice_style = data.get("style", "neutral")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    try:
        audio_path = generate_speech(text, voice_style)
        return send_file(audio_path, mimetype="audio/wav")
    except Exception as e:
        current_app.logger.error(f"TTS error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500
