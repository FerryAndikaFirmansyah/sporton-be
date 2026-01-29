import cors from "cors";
import express from "express";
import { authenticate } from "./middlewares/auth.middleware";
import authRoutes from "./routes/auth.route";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("sporton backend API is running");
});

app.get("/test-middleware", authenticate, (req, res) => {
  res.send("token berhasil diakses");
});

export default app;
