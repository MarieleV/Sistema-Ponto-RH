import React, { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";

import Login from "./pages/Login";
import RecuperarSenha from "./pages/RecuperarSenha";
import RegistroPonto from "./pages/RegistroPonto";
import Indicadores from "./pages/Indicadores";
import CartaoPonto from "./pages/CartaoPonto";
import AjustarPonto from "./pages/AjustarPonto";
import MinhasSolicitacoes from "./pages/MinhasSolicitacoes";
import Configuracoes from "./pages/Configuracoes";

function App() {
  const [tela, setTela] = useState("login"); // inicializa na tela de login

  const renderTela = () => {
    switch (tela) {
      case "registro":
        return <RegistroPonto />;
      case "indicadores":
        return <Indicadores />;
      case "cartao":
        return <CartaoPonto />;
      case "ajustar":
        return <AjustarPonto />;
      case "solicitacoes":
        return <MinhasSolicitacoes />;
      case "config":
        return <Configuracoes />;
      case "recuperar":
        return <RecuperarSenha onVoltar={() => setTela("login")} />;
      case "login":
        return <Login onLogin={() => setTela("registro")} onForgotPassword={() => setTela("recuperar")} />;
      default:
        return <Login onLogin={() => setTela("registro")} onForgotPassword={() => setTela("recuperar")} />;
    }
  };

  const isLoginOuRecuperar = tela === "login" || tela === "recuperar";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {!isLoginOuRecuperar && <Cabecalho usuario="Maria Alice Giuliari" />}
      <div style={{ display: "flex", flex: 1 }}>
        {!isLoginOuRecuperar && (
          <BarraLateral
            onNavigate={(item) => {
              if (item === "sair") setTela("login");
              else setTela(item);
            }}
            empresa="LIBRA COBRANÇAS EMPRESARIAIS LTDA"
            cargo="ASSISTENTE ADMINISTRATIVO II"
          />
        )}
        <main style={{ flex: 1, padding: "20px" }}>{renderTela()}</main>
      </div>
    </div>
  );
}

export default App;
