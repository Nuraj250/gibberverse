# 🔊 Gibberverse

**Gibberverse** is an experimental multi-agent communication system where AI agents interact using a simulated sound-based protocol called **Gibberlink Mode**. You can observe, decode, and interact with these agents through voice and text.

---

## 🧠 Features

- 🗣️ Talk to an AI agent and hear its response
- 🎧 Watch how AIs encode/decode their communication
- 🔊 Convert any text to speech (TTS)
- 🔁 Encode/decode messages in simulated "Gibber" language

---

## 📦 Tech Stack

- **Frontend**: React (Create React App)
- **Backend**: Python (FastAPI)
- **AI Engine**: OpenAI (GPT-3.5)
- **Text-to-Speech**: gTTS
- **Protocol Encoder**: Simulated (Gibberlink)

---

## 🏁 Getting Started

### 🐍 Backend (FastAPI)

#### 1. Install dependencies

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

#### 2. Create `.env`

```env
OPENAI_API_KEY=your_openai_key
```

#### 3. Run the server

```bash
uvicorn app.main:app --reload
```

The API will be available at:  
👉 `http://localhost:8000`

---

### ⚛️ Frontend (React)

#### 1. Install dependencies

```bash
cd gibberverse-frontend
npm install
```

#### 2. Create `.env`

```env
REACT_APP_API_URL=http://localhost:8000/api/v1
```

#### 3. Start development server

```bash
npm start
```

App runs at:  
👉 `http://localhost:3000`

---

## 🧪 Example Usage

### 💬 Talk to AI

- Type your message in the **ChatBox**
- AI replies using OpenAI GPT
- You can trigger a voice response

### 🎙️ Gibberlink Encoding

- Encode messages into Gibber format
- Decode them back to readable text

---

## 📁 Folder Structure

```
gibberverse/
├── backend/
│   └── app/
│       ├── api/
│       ├── services/
│       ├── models/
│       └── main.py
├── gibberverse-frontend/
│   ├── src/
│   │   ├── api/
│   │   └── components/
│   └── App.js
```

---

## ✅ API Endpoints

| Endpoint           | Method | Description            |
|--------------------|--------|------------------------|
| `/ai/respond`      | POST   | Get response from AI   |
| `/gibber/encode`   | POST   | Encode message         |
| `/gibber/decode`   | POST   | Decode gibber text     |
| `/audio/speak`     | POST   | Convert text to speech |

---

## 🛠️ Future Plans

- Add real-time agent-to-agent interaction
- Integrate `ggwave` for actual sound-based transmission
- STT (Speech-to-text) integration

---

## 🧑‍💻 Author

Made with ❤️ by [@Nuraj250](https://github.com/Nuraj250)

---

## 📄 License

MIT License. Use freely, contribute generously.