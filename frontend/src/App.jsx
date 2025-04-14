import React from "react";
import VoiceForm from "./components/VoiceForm";

function App() {
  return (
    <div className="app-wrapper d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="gradient-text fw-bold mb-4">🎙 VoiceMorpher</h1>
      <VoiceForm />
    </div>
  );
}

export default App;
