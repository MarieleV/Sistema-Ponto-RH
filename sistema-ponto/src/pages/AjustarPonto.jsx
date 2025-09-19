import React from "react";
import { FaEllipsisV, FaRegCalendarAlt } from "react-icons/fa";

function AjustarPonto() {
    return (
    <div style={styles.container}>
      {/* Texto de orientação */}
        <div style={styles.textoArea}>
        <p style={styles.texto}>
            O ajuste de ponto deve ser utilizado para justificativa de ausência/falta
            ou caso tenha ocorrido algum problema para registrar o ponto.
        </p>
        </div>

      {/* Container da Data */}
        <div style={styles.centralizador}>
        <div style={styles.registro}>
            <div>
            <div style={styles.labelMenor}>Data</div>
            <div style={styles.labelMaior}>Quinta-feira, 11/09/2025</div>
            </div>
            <FaRegCalendarAlt style={styles.icon} />
        </div>
        </div>

      {/* Registros de ponto */}
        <div style={styles.registrosArea}>
        {[
            { label: "Entrada 1", hora: "08:00" },
            { label: "Saída 1", hora: "12:00" },
            { label: "Entrada 2", hora: "13:00" },
            { label: "Saída 2", hora: "18:00" },
            { label: "Entrada 3", hora: "00:00" },
            { label: "Saída 3", hora: "00:00" },
            { label: "Entrada 4", hora: "00:00" },
            { label: "Saída 4", hora: "00:00" },
        ].map((item, index) => (
            <div key={index} style={styles.centralizador}>
            <div style={styles.registro}>
                <div>
                <div style={styles.labelMenor}>{item.label}</div>
                <div style={styles.labelMaior}>{item.hora}</div>
                </div>
                <FaEllipsisV style={styles.icon} />
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}

const styles = {
    container: {
        width: "900px",
        margin: "20px auto",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "12px", // menor espaçamento entre elementos
    },
    textoArea: {
        padding: "10px",
        borderBottom: "2px solid #eee",
        marginBottom: "8px", // menor margem abaixo do texto
    },
    texto: {
        fontSize: "13px",
        color: "#374151",
        lineHeight: "1.4",
    },
    registrosArea: {
        display: "flex",
        flexDirection: "column",
        gap: "8px", // diminuiu o espaço entre os containers
    },
    centralizador: {
        display: "flex",
        justifyContent: "center",
    },
    registro: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "410px",
        height: "60px",
        padding: "8px 12px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f9fafb",
    },
    labelMenor: {
        fontSize: "13px",
        color: "#6b7280",
        fontWeight: "500",
        marginBottom: "3px", // menor espaçamento entre labelMenor e labelMaior
    },
    labelMaior: {
        fontSize: "16px",
        color: "#111827",
        fontWeight: "600",
    },
    icon: {
        fontSize: "18px",
        color: "#6b7280",
        cursor: "pointer",
    },
};

export default AjustarPonto;
