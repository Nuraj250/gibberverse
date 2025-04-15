const API = process.env.REACT_APP_API_URL;

export async function encodeGibber(data) {
  const res = await fetch(`${API}/gibber/encode`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return res.json();
}

export async function decodeGibber(data) {
  const res = await fetch(`${API}/gibber/decode`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return res.json();
}