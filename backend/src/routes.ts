import { Router } from "express";
import { db } from "./database";

const router = Router();

/**
 * Rota de LOGIN
 * Recebe email e senha do frontend
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Consulta no banco
    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

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
