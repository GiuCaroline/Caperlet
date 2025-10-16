import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Configuração mais segura e explícita pro Codespaces
app.use(
  cors({
    origin: "*", // libera tudo
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Força resposta para preflight OPTIONS
app.options(/.*/, cors());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});