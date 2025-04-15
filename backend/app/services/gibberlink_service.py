def encode_gibber(text: str) -> str:
    return "".join(chr((ord(c) + 3) % 256) for c in text)

def decode_gibber(encoded: str) -> str:
    return "".join(chr((ord(c) - 3) % 256) for c in encoded)
