from pydantic import BaseModel

class PromptRequest(BaseModel):
    prompt: str

class PromptResponse(BaseModel):
    response: str

class GibberRequest(BaseModel):
    data: str

class GibberResponse(BaseModel):
    data: str

class TextRequest(BaseModel):
    text: str

class AudioResponse(BaseModel):
    audio_url: str
