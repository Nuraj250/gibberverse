import React, { useState } from "react";
import axios from "axios";
import AudioPlayer from "./AudioPlayer";

const VoiceForm = () => {
  const [text, setText] = useState("");
  const [style, setStyle] = useState("neutral"); // Still supported for future upgrades
  const [audioSrc, setAudioSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const styles = ["neutral", "calm", "happy", "angry", "sad", "robotic"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/speak", {
        text,
        style,
      }, {
        responseType: "blob", // ⬅️ Important: Receive binary
      });

      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const audioURL = URL.createObjectURL(audioBlob);
      setAudioSrc(audioURL);
    } catch (err) {
      console.error("Error generating voice:", err);
    }

    setLoading(false);
  };

  return (
    <form
      className="glass-card p-4 shadow rounded text-center"
      style={{ width: "100%", maxWidth: "500px" }}
      onSubmit={handleSubmit}
    >
      <textarea
        className="form-control mb-3"
        placeholder="Enter your text here..."
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="form-select mb-3"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      >
        {styles.map((s) => (
          <option key={s} value={s}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </option>
        ))}
      </select>

      <button className="btn btn-primary w-100 fw-bold" type="submit" disabled={loading}>
        {loading ? "Generating..." : "Speak 🎧"}
      </button>

      {audioSrc && <AudioPlayer src={audioSrc} />}
    </form>
  );
};

export default VoiceForm;
