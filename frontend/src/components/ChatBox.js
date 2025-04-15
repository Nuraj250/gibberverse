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
      <div className="mb-3">
        <textarea
          className="form-control"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="3"
          placeholder="Ask me something..."
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleSubmit}>Send</button>
      {response && (
        <div className="alert alert-success">
          <strong>Response:</strong> {response}
        </div>
      )}
    </div>
  );
}
