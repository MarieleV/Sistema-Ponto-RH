import { useState } from "react";

function RegistroPonto() {
    const [registros, setRegistros] = useState([]);

    const registrarPonto = (tipo) => {
    const data = new Date();
    const horario = data.toLocaleTimeString();
    setRegistros([...registros, { tipo, horario }]);
    };

    return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>Registro de Ponto</h1>

        <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
            <button onClick={() => registrarPonto("Entrada")}>Entrada</button>
            <button onClick={() => registrarPonto("Pausa")}>Pausa</button>
            <button onClick={() => registrarPonto("Retorno")}>Retorno</button>
            <button onClick={() => registrarPonto("Saída")}>Saída</button>
        </div>

        <h2>Histórico de Batidas</h2>
        <ul>
        {registros.length === 0 ? (
            <li>Nenhum registro ainda</li>
        ) : (
            registros.map((r, i) => (
            <li key={i}>
                {r.tipo} - {r.horario}
            </li>
            ))
        )}
        </ul>
    </div>
    );
}

export default RegistroPonto;
