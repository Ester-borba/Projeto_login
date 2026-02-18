import mysql from "mysql2/promise";

// Criamos uma conexão com o banco MySQL
export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Esterswag122", // 👉 coloque aqui a senha do seu MySQL (se tiver)
  database: "login_db",
});
