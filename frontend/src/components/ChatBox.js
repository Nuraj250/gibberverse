import { useState } from "react";
import { fetchAIResponse } from "../api/ai";

export default function ChatBox() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await fetchAIResponse(prompt);
    setResponse(res.response);
  };

  return (
    <div>
      <h2>Talk to Agent</h2>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={handleSubmit}>Send</button>
      <p><strong>Response:</strong> {response}</p>
    </div>
  );
}
