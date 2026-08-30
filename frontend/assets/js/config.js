const hostLocal = ["localhost", "127.0.0.1"].includes(
  window.location.hostname
);

window.NUTRIFT_API_URL = hostLocal
  ? "http://localhost:3000"
  : "https://nutrift-api.onrender.com";
