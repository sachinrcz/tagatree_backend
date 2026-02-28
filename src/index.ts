import "dotenv/config";
import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Welcome to TagaTree API" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/cycle", (_req, res) => {
  res.json({
    cycle_id: "3784",
    cycle_end_date: "2026-03-31",
    capacity: 50,
    paid_count: 32,
    remaining: 18,
    updated_at: "2026-03-01T10:30:00Z",
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
