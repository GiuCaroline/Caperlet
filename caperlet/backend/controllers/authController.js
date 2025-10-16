import { pool } from "../db/connection.js";

export async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    if (result.rows.length > 0) {
      res.json({ sucess: true, user: result.rows[0] });
    } else {
      res.status(401).json({ sucess: false, message: "Credenciais inválidas" });
    }
  } catch (error) {
    console.error("Erro ao logar:", error);
    res.status(500).json({ sucess: false, message: "Erro interno do servidor" });
  }
}