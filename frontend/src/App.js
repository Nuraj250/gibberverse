import ChatBox from "./components/ChatBox";
import GibberMonitor from "./components/GibberMonitor";
import VoiceInput from "./components/VoiceInput";

function App() {
  return (
    <div className="App">
      <h1>Gibberverse Interface</h1>
      <ChatBox />
      <VoiceInput />
      <GibberMonitor />
    </div>
  );
}

export default App;
