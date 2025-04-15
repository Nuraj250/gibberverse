import { useState } from "react";
import { speakText } from "../api/audio";

export default function VoiceInput() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const handleSpeak = async () => {
    const res = await speakText(text);
    setAudioUrl(res.audio_url);
  };

  return (
    <div>
      <h2>Text-to-Speech</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSpeak}>Speak</button>
      {audioUrl && <audio controls src={audioUrl} />}
    </div>
  );
}
