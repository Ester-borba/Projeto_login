import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// Permite que o React converse com a API
app.use(cors());

// Permite enviar JSON
app.use(express.json());

// Usa as rotas que vamos criar
app.use(routes);

// Porta onde o servidor vai rodar
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
