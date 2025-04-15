import { useState } from "react";
import { encodeGibber, decodeGibber } from "../api/gibberlink";

export default function GibberMonitor() {
  const [text, setText] = useState("");
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");

  const handleEncode = async () => {
    const res = await encodeGibber(text);
    setEncoded(res.data);
  };

  const handleDecode = async () => {
    const res = await decodeGibber(encoded);
    setDecoded(res.data);
  };

  return (
    <div>
      <div className="mb-3">
        <input
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Text to encode"
        />
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-secondary" onClick={handleEncode}>
          Encode
        </button>
        <button className="btn btn-secondary" onClick={handleDecode}>
          Decode
        </button>
      </div>

      {encoded && (
        <div className="mb-2">
          <strong>Encoded:</strong>
          <div className="alert alert-dark mt-1">{encoded}</div>
        </div>
      )}

      {decoded && (
        <div>
          <strong>Decoded:</strong>
          <div className="alert alert-info mt-1">{decoded}</div>
        </div>
      )}
    </div>
  );
}
