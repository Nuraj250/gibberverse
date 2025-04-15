const API = process.env.REACT_APP_API_URL;

export async function fetchAIResponse(prompt) {
  const res = await fetch(`${API}/ai/respond`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return res.json();
}
