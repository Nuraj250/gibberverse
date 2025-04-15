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
      <div className="mb-3">
        <input
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to convert to speech"
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleSpeak}>
        Speak
      </button>

      {audioUrl && (
        <div>
          <label className="form-label">Playback:</label>
          <audio className="w-100" controls src={audioUrl} />
        </div>
      )}
    </div>
  );
}
