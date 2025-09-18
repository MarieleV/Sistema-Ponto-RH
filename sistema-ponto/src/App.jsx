import React, { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";

import RegistroPonto from "./pages/RegistroPonto";
import Indicadores from "./pages/Indicadores";
import CartaoPonto from "./pages/CartaoPonto";
import AjustarPonto from "./pages/AjustarPonto";
import MinhasSolicitacoes from "./pages/MinhasSolicitacoes";
import Configuracoes from "./pages/Configuracoes";
import Sair from "./pages/Sair";

function App() {
  const [tela, setTela] = useState("registro");

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
      case "sair":
        return <Sair />;
      default:
        return <RegistroPonto />;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Cabecalho usuario="Maria Alice Giuliari" />
      <div style={{ display: "flex", flex: 1 }}>
        <BarraLateral
          onNavigate={setTela}
          empresa="LIBRA COBRANÇAS EMPRESARIAIS LTDA"
          cargo="ASSISTENTE ADMINISTRATIVO II"
        />
        <main style={{ flex: 1, padding: "20px" }}>{renderTela()}</main>
      </div>
    </div>
  );
}

export default App;
