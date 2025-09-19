import React, { useState } from "react";

function BarraLateral({ onNavigate, empresa, cargo }) {
    const [selected, setSelected] = useState("registro");

    const handleClick = (item) => {
    setSelected(item);
    onNavigate(item);
    };

    return (
    <aside style={styles.container}>
        <div style={styles.topSection}>
        <div style={styles.empresa}>{empresa}</div>
        <div style={styles.cargo}>{cargo}</div>
        </div>

        {/* Menu de navegação */}
        <ul style={styles.list}>
        {[
        { key: "registro", label: "Incluir ponto" },
        { key: "indicadores", label: "Indicadores" },
        { key: "cartao", label: "Cartão ponto" },
        { key: "ajustar", label: "Ajustar ponto" },
        { key: "solicitacoes", label: "Minhas solicitações" },
        { key: "config", label: "Configurações" },
        { key: "sair", label: "Sair" },
        ].map((item) => (
            <li
            key={item.key}
            onClick={() => handleClick(item.key)}
            style={{
                ...styles.item,
                ...(selected === item.key ? styles.selected : {}),
            }}
            >
            {item.label}
            </li>
        ))}
        </ul>
    </aside>
    );
}

const styles = {
    container: {
        width: "280px",
        height: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
    },
    topSection: {
        padding: "30px 20px",
        borderBottom: "1px solid #e5e7eb",
        textAlign: "left",
    },
    empresa: {
        fontWeight: "700",
        color: "#000",
        fontSize: "18px",
        marginBottom: "4px",
    },
    cargo: {
        fontWeight: "500",
        color: "#6b7280",
        fontSize: "14px",
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        marginTop: "50px", // espaço entre cargo/empresa e menu
        flexGrow: 1,
    },
    item: {
        padding: "16px 20px",
        cursor: "pointer",
        fontWeight: "500",
        transition: "all 0.2s ease",
        borderLeft: "4px solid transparent",
        margin: "4px 0",
    },
    selected: {
        backgroundColor: "#f3f4f6",
        borderLeft: "4px solid #6b7280",
        fontWeight: "600",
    },
};

export default BarraLateral;
