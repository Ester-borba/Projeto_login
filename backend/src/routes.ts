import { Router } from "express";
import pool from "./database";


const router = Router();

/**
 * Rota de LOGIN
 * Recebe email e senha do frontend
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Consulta no banco
    const result = await pool.query(
  "SELECT * FROM users WHERE email = $1 AND password = $2",
  [email, password]
);

const rows = result.rows;

    // Se não encontrou usuário
    if (rows.length === 0) {
      return res.status(401).json({ message: "Usuário ou senha inválidos" });
    }

    // Se encontrou
    return res.json({
      message: "Login realizado com sucesso",
      user: rows[0],
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

export default router;
