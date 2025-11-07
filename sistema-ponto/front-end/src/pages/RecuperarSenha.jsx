import React, { useState } from "react";
import logo from "../assets/Logo-Consulth.png";

const RecuperarSenha = ({ onVoltar }) => {
  const [email, setEmail] = useState("");

  const handleEnviar = () => {
    alert(`Um e-mail foi enviado para: ${email}`);
  };

  return (
    <div style={styles.paginaAlterarSenha}>
      <div style={styles.container}>
        {/* Lado esquerdo */}
        <div style={styles.leftSection}>
          <div style={styles.loginBox}>
            <h2 style={styles.titulo}>Recuperar Senha</h2>
            <p style={styles.instrucao}>
              Informe seu e-mail para enviarmos um link para a alteração de senha.
            </p>

            <div style={styles.formulario}>
              <label htmlFor="email" style={styles.label}>E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu E-mail"
                style={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div style={styles.botoesContainer}>
              <button style={styles.botao} onClick={handleEnviar}>
                Enviar E-mail
              </button>
              <button style={{ ...styles.botao, ...styles.botaoVoltar }} onClick={onVoltar}>
                Voltar
              </button>
            </div>
          </div>
        </div>

        {/* Lado direito - Logo */}
        <div style={styles.rightSection}>
          <img src={logo} alt="Logo" style={styles.logoImg} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  paginaAlterarSenha: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    display: "flex",
    width: "100%",
  },
  leftSection: {
    width: "50%",
    backgroundColor: "#F6F6F7",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  loginBox: {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  titulo: {
    marginBottom: "10px",
    fontSize: "2.2rem",
    fontWeight: 700,
  },
  instrucao: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "25px",
    lineHeight: "1.5",
  },
  formulario: {
    width: "100%",
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "1rem",
    marginBottom: "8px",
    fontWeight: 500,
    color: "#333",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    background: "#f9f9f9",
    color: "black",
    fontSize: "1.1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  botoesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "25px",
  },
  botao: {
    width: "100%",
    padding: "12px",
    backgroundColor: "black",
    color: "white",
    border: "2px solid transparent",
    fontSize: "1.1rem",
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "center",
    borderRadius: "5px",
    transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
  },
  botaoVoltar: {
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
  },
  rightSection: {
    width: "50%",
    height: "100vh",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    maxWidth: "80%",
    height: "auto",
    objectFit: "contain",
  },
};

export default RecuperarSenha;
