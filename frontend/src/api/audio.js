const API = process.env.REACT_APP_API_URL;

export async function speakText(text) {
  const res = await fetch(`${API}/audio/speak`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
}