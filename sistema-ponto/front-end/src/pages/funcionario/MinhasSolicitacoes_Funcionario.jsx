import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";

function MinhasSolicitacoes() {
    const [filtroAtivo, setFiltroAtivo] = useState(true);
    const [dataFiltro, setDataFiltro] = useState("Set 21, 2025");
    const [statusFiltro, setStatusFiltro] = useState("Aguardando Retorno");

  // trocar depois por dados reais da API
    const solicitacoes = [
    { data: "21/09/2025", tipo: "Entrada 1", motivo: "Atraso", status: "Aguardando Retorno" },
    { data: "20/09/2025", tipo: "Saída 2", motivo: "Falta", status: "Aceito" },
    { data: "19/09/2025", tipo: "Entrada 2", motivo: "Problema Ponto", status: "Negado" },
    ];

    return (
    <div style={styles.container}>
        {/* Área de filtro */}
        {filtroAtivo && (
        <div style={styles.filtroArea}>
            <div style={styles.filtroCabecalho}>
            <div style={styles.labelMaior}>Filtro</div>
            <FaFilterCircleXmark style={styles.icon} onClick={() => setFiltroAtivo(false)} />
            </div>

            <div style={styles.filtros}>
            <div style={styles.filtroContainer}>
                <div style={styles.labelMenor}>Insira o Período</div>
                <div style={styles.labelMaior}>
                <span>{dataFiltro}</span>
                <FaRegCalendarAlt style={styles.icon} />
                </div>
            </div>

            <div style={styles.filtroContainer}>
                <div style={styles.labelMenor}>Status da Solicitação</div>
                <div style={styles.labelMaior}>
                <span>{statusFiltro}</span>
                <BiChevronDown style={styles.icon} />
                </div>
                </div>
            </div>
        </div>
        )}

        {/* Tabela */}
        <div style={styles.tabelaContainer}>
        <table style={styles.tabela}>
            <thead>
            <tr>
                <th style={styles.th}>Data</th>
                <th style={styles.th}>Tipo</th>
                <th style={styles.th}>Motivo</th>
                <th style={styles.th}>Status</th>
            </tr>
            </thead>
            <tbody>
            {solicitacoes.map((item, index) => (
                <tr key={index}>
                <td style={styles.td}>{item.data}</td>
                <td style={styles.td}>{item.tipo}</td>
                <td style={styles.td}>{item.motivo}</td>
                <td style={styles.td}>{item.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    );
}

const styles = {
    container: {
        width: "1100px",
        margin: "20px auto",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    filtroArea: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        borderBottom: "2px solid #eee",
        paddingBottom: "10px",
    },
    filtroCabecalho: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    filtros: {
        display: "flex",
        gap: "20px",
    },
    filtroContainer: {
        display: "flex",
        flexDirection: "column",
        minWidth: "250px",
        padding: "12px 18px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f9fafb",
        whiteSpace: "nowrap", // impede quebra de linha
    },
    labelMenor: {
        fontSize: "13px",
        color: "#6b7280",
        marginBottom: "4px",
    },
    labelMaior: {
        fontSize: "15px",
        color: "#111827",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // mantém o texto à esquerda e ícone à direita
    },
    icon: {
        fontSize: "25px",
        color: "#6b7280",
        cursor: "pointer",
    },
    tabelaContainer: {
        overflowX: "auto",
    },
    tabela: {
        width: "100%",
        borderCollapse: "collapse",
    },
    th: {
        borderBottom: "2px solid #ddd",
        textAlign: "left",
        padding: "8px",
        backgroundColor: "#fff",
    },
    td: {
        borderBottom: "1px solid #eee",
        padding: "8px",
    },
};

export default MinhasSolicitacoes;
