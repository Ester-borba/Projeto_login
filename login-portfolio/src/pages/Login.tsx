import { useState } from "react";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");


 async function handleLogin(e: React.FormEvent) {
  e.preventDefault();

  try {
    const response = await fetch("https://backend-projeto-login.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login inválido");
    }

    const data = await response.json();

    setSuccess("Login realizado com sucesso!");
    console.log("Usuário:", data.user);


  } catch (error) {
    alert("❌ Email ou senha incorretos");
  }
}


  return (
    <div className="wrapper">
      <div className="card">

        <div className="left">
          <h2>Bem-vinda</h2>
          <p>Acesse sua conta</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Entrar</button>
            {success && <span className="success">{success}</span>}

          </form>
        </div>

        <div className="right">
          <h3>Projeto Portfólio</h3>
          <p>Sistema de autenticação desenvolvido com React + TypeScript.</p>
        </div>

      </div>
    </div>
  );
}
