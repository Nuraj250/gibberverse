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
      <h2>Gibberlink Monitor</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Text to encode" />
      <button onClick={handleEncode}>Encode</button>
      <button onClick={handleDecode}>Decode</button>
      <p>Encoded: {encoded}</p>
      <p>Decoded: {decoded}</p>
    </div>
  );
}
