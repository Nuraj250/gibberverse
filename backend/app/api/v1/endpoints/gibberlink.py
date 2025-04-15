from fastapi import APIRouter
from app.models.schemas import GibberRequest, GibberResponse
from app.services.gibberlink_service import encode_gibber, decode_gibber

router = APIRouter()

@router.post("/encode", response_model=GibberResponse)
async def encode_message(req: GibberRequest):
    return {"data": encode_gibber(req.data)}

@router.post("/decode", response_model=GibberResponse)
async def decode_message(req: GibberRequest):
    return {"data": decode_gibber(req.data)}