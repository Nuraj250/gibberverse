from fastapi import APIRouter
from pydantic import BaseModel
from app.services.openai_service import get_openai_response

router = APIRouter()

class PromptRequest(BaseModel):
    prompt: str

@router.post("/respond")
async def generate_response(req: PromptRequest):
    response = await get_openai_response(req.prompt)
    return {"response": response}
