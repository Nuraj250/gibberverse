from fastapi import APIRouter
from app.models.schemas import TextRequest, AudioResponse
from app.services.audio_service import text_to_speech

router = APIRouter()

@router.post("/speak", response_model=AudioResponse)
async def speak(req: TextRequest):
    file_url = text_to_speech(req.text)
    return {"audio_url": file_url}