import { pool } from "../db/connection.js";

export async function candies(req, res) {
  try {
    const result = await pool.query(
      "SELECT * FROM candies"
    );

    if (result.rows.length > 0) {
      res.json({ success: true, candies: result.rows });
    } else {
      res.status(401).json({ success: false, message: "Nenhum doce encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar doces:", error);
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
  }
}