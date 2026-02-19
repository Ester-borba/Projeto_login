import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Render fornece a URL do banco via variável de ambiente
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // obrigatório no Render
  },
});

export default pool;
