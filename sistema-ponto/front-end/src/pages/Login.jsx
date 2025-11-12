import React, { useState } from "react";
import logo from "../assets/Logo-Consulth.png";

const Login = ({ onLogin, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    // LOGIN ADMIN
    if (email === "admin@teste.com" && senha === "123456") {
      onLogin({
        id_usuario: 1,
        email: email,
        tipo_usuario: "Administrador",
      });
      return;
    }

    // LOGIN FUNCIONÁRIO
    if (email === "usuario@teste.com" && senha === "123456") {
      onLogin({
        id_usuario: 2,
        email: email,
        tipo_usuario: "Funcionario",
      });
      return;
    }

    setShowModal(true); // erro
  };

  return (
    <div style={styles.paginaLogin}>
      <div style={styles.container}>

        {/* FORMULÁRIO */}
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

            {/* RECUPERAR SENHA */}
            <div style={styles.alterarSenha}>
              <a
                href="#"
                style={styles.linkSenha}
                onClick={(e) => {
                  e.preventDefault();
                  onForgotPassword();
                }}
              >
                Esqueci minha senha
              </a>
            </div>
          </div>
        </div>

        {/* LOGO */}
        <div style={styles.rightSection}>
          <img src={logo} alt="Logo" style={styles.logoImg} />
        </div>
      </div>

      {/* MODAL ERRO */}
      {showModal && (
        <div style={{ ...styles.modal, display: "flex" }}>
          <div style={styles.modalContent}>
            <p style={styles.mensagemErro}>Usuário Não Encontrado</p>
            <button style={styles.modalButton} onClick={() => setShowModal(false)}>
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
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  container: {
    display: "flex",
    width: "900px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  leftSection: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  rightSection: {
    width: "40%",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    width: "220px",
  },
  titulo: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  formulario: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "600",
    marginBottom: "8px",
  },
  inputField: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  botoesContainer: {
    marginTop: "20px",
  },
  botaoLogin: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "15px",
  },
  linkSenha: {
    color: "#000",
    textDecoration: "underline",
    cursor: "pointer",
  },
  alterarSenha: {
    textAlign: "center",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    width: "300px",
  },
  mensagemErro: {
    color: "red",
    marginBottom: "15px",
  },
  modalButton: {
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Login;
