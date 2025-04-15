import ChatBox from "./components/ChatBox";
import GibberMonitor from "./components/GibberMonitor";
import VoiceInput from "./components/VoiceInput";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="container py-5">
        <h1 className="mb-4 text-center">🧠 Gibberverse Interface</h1>
  
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Talk to Agent</h5>
                <ChatBox />
              </div>
            </div>
          </div>
  
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Text-to-Speech</h5>
                <VoiceInput />
              </div>
            </div>
          </div>
  
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Gibberlink Monitor</h5>
                <GibberMonitor />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
