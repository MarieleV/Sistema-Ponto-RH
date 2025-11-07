import React, { useState } from "react";
import logo from "../assets/Logo-Consulth.png";
 
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showModal, setShowModal] = useState(false);
 
  const handleLogin = () => {
    // Apenas para testar, depois trocar por API
    if (email !== "usuario@teste.com" || senha !== "123456") {
      setShowModal(true);
    } else {
      onLogin(); // chama o callback do App para ir para tela principal
    }
  };
 
  return (
    <div style={styles.paginaLogin}>
      <div style={styles.container}>
        {/* Lado esquerdo - Login */}
        <div style={styles.leftSection}>
          <h2 style={styles.titulo}>Fazer Login</h2>
 
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
 
          <div style={styles.formulario}>
            <label htmlFor="senha" style={styles.label}>Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua Senha"
              style={styles.inputField}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
 
          <div style={styles.botoesContainer}>
            <button style={styles.botaoLogin} onClick={handleLogin}>
              Entrar
            </button>
            <div style={styles.alterarSenha}>
              <a href="/RecuperarSenha" style={styles.linkSenha}>
                Esqueci minha senha
              </a>
            </div>
          </div>
        </div>
 
        {/* Lado direito - Logo */}
        <div style={styles.rightSection}>
          <img src={logo} alt="Logo" style={styles.logoImg} />
        </div>
      </div>
 
      {/* Modal de erro */}
      {showModal && (
        <div style={{ ...styles.modal, display: "flex" }}>
          <div style={styles.modalContent}>
            <p style={styles.mensagemErro}>Usuário Não Encontrado</p>
            <button
              style={styles.modalButton}
              onClick={() => setShowModal(false)}
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
 
const styles = {
  paginaLogin: {
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    color: "black",
  },
  titulo: {
    fontSize: "35px",
    fontWeight: 600,
    marginBottom: "40px",
  },
  formulario: {
    width: "100%",
    maxWidth: "300px",
    marginBottom: "25px",
  },
  label: {
    display: "block",
    fontSize: "1rem",
    marginBottom: "8px",
    fontWeight: 600,
    color: "#333",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    background: "#f9f9f9",
    fontSize: "1.1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  botoesContainer: {
    width: "100%",
    maxWidth: "300px",
  },
  botaoLogin: {
    width: "100%",
    maxWidth: "200px",
    padding: "10px 25px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    fontSize: "22px",
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "center",
    borderRadius: "5px",
    marginTop: "5px",
    transition: "background-color 0.2s",
  },
  alterarSenha: {
    marginTop: "20px",
    textAlign: "center",
  },
  linkSenha: {
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  rightSection: {
    width: "50%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  logoImg: {
    width: "300px",
    height: "auto",
    objectFit: "contain",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modalContent: {
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    width: "500px",
    maxWidth: "100%",
  },
  mensagemErro: {
    color: "black",
    fontSize: "30px",
    marginBottom: "30px",
    whiteSpace: "normal",
  },
  modalButton: {
    background: "black",
    border: "none",
    padding: "15px 25px",
    cursor: "pointer",
    color: "white",
    borderRadius: "6px",
    fontSize: "22px",
    display: "block",
    margin: "0 auto",
    marginTop: "10px",
    transition: "background 0.2s",
  },
};
 
export default Login;
