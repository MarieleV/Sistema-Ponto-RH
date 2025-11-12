import React, { useState } from "react";

// FUNCIONÁRIO
import CabecalhoFuncionario from "./components/funcionario/CabecalhoFuncionario";
import BarraLateralFuncionario from "./components/funcionario/BarraLateralFuncionario";

// ADMINISTRADOR
import AdminCabecalho from "./components/administrador/AdminCabecalho";
import AdminSidebar from "./components/administrador/AdminBarraLateral";


// AUTENTICAÇÃO
import Login from "./pages/Login";
import RecuperarSenha from "./pages/RecuperarSenha";

// PÁGINAS DO ADMINISTRADOR
import AdminDashboard from "./pages/administrador/adminDashboard";
import AdminJustificativas from "./pages/administrador/gestaoJustificativas";
import JustificativasNegadas from "./pages/administrador/justificativasNegadas";
import JustificativasNovas from "./pages/administrador/justificativasNovas";
import JustificativasAceitas from "./pages/administrador/justificativasAceitas";
import Relatorios from "./pages/administrador/relatorios";
import GestaoColaboradores from "./pages/administrador/gestaoColaborador";

// PÁGINAS DO FUNCIONÁRIO
import RegistroPonto from "./pages/funcionario/RegistroPonto_Funcionario";
import Indicadores from "./pages/funcionario/Indicadores_Funcionario";
import CartaoPonto from "./pages/funcionario/CartaoPonto_Funcionario";
import AjustarPonto from "./pages/funcionario/AjustarPonto_Funcionario";
import MinhasSolicitacoes from "./pages/funcionario/MinhasSolicitacoes_Funcionario";
import Configuracoes from "./pages/funcionario/Configuracoes_Funcionario";

function App() {
  const [tela, setTela] = useState("login");
  const [usuario, setUsuario] = useState(null);

  const logout = () => {
    setUsuario(null);
    setTela("login");
  };

  const handleLogin = (dadosUsuario) => {
    setUsuario(dadosUsuario);

    if (dadosUsuario.tipo_usuario === "Administrador") {
      setTela("admin-dashboard");
    } else {
      setTela("registro");
    }
  };

  const renderTela = () => {
    if (tela === "login") {
      return (
        <Login
          onLogin={handleLogin}
          onForgotPassword={() => setTela("recuperar")}
        />
      );
    }

    if (tela === "recuperar") {
      return <RecuperarSenha onVoltar={() => setTela("login")} />;
    }

if (usuario?.tipo_usuario === "Administrador") {
  switch (tela) {
    case "adminDashboard":
      return <AdminDashboard />;
    case "gestaoColaborador":
      return <GestaoColaboradores />;
    case "gestaoJustificativas":
      return <AdminJustificativas onNavigate={setTela} />;
    case "justificativasNegadas":
      return <JustificativasNegadas />;
    case "justificativasNovas":
      return <JustificativasNovas />;
    case "justificativasAceitas":
      return <JustificativasAceitas />;
    case "relatorios":
      return <Relatorios />;
    case "adminConfig":
      return <h1>Configurações do Administrador</h1>;
    case "login": // botão "Sair" do menu admin
      logout();
      return null;
    default:
      return <AdminDashboard />;
  }
}


    if (tela === "sair") {
      logout();
      return null;
    }

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
      default:
        return <RegistroPonto />;
    }
  };

  const isAuthPage = tela === "login" || tela === "recuperar";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>

      {!isAuthPage && usuario?.tipo_usuario === "Funcionario" && (
        <CabecalhoFuncionario usuario={usuario?.email} />
      )}

      {!isAuthPage && usuario?.tipo_usuario === "Administrador" && (
        <AdminCabecalho usuario={usuario?.email} />
      )}

      <div style={{ display: "flex", flex: 1 }}>

        {!isAuthPage && usuario?.tipo_usuario === "Funcionario" && (
          <BarraLateralFuncionario onNavigate={setTela} />
        )}

        {!isAuthPage && usuario?.tipo_usuario === "Administrador" && (
          <AdminSidebar onNavigate={setTela} />
        )}

        <main style={{ flex: 1, padding: "20px" }}>
          {renderTela()}
        </main>

      </div>
    </div>
  );
}

export default App;
