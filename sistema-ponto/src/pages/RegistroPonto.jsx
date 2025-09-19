import React from "react";
import { RiUserLocationFill } from "react-icons/ri";

function RegistroPonto() {
    return (
    <div style={styles.container}>
      {/* Área de informações */}
        <div style={styles.infoArea}>
        <RiUserLocationFill style={styles.icon} />
        <p style={styles.textoBold}>11/09/2025 - 12:00:05</p>
        <p style={styles.textoBold}>978.64 metros</p>
        <p style={styles.texto}>
        📍 Rua Ottokar Doerffel, Joinville, Santa Catarina, Brasil
        </p>
        </div>

      {/* Área do botão */}
        <div style={styles.buttonArea}>
        <button style={styles.button}>Incluir Ponto</button>
        </div>
        </div>
    );
}

const styles = {
    container: {
        width: "900px",       // um pouco mais largo
        height: "80vh",       // um pouco mais alto
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        overflow: "hidden",
    },
    infoArea: {
        flex: "0 0 500px",    // aumenta a área de info
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "8px",           // espaçamento levemente maior
        backgroundColor: "#f9fafb",
        paddingBottom: "20px",
    },
    buttonArea: {
        flex: "0 0 80px",     // área do botão
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "2px solid #eee",
        backgroundColor: "#fff",
    },
    button: {
        padding: "10px 22px",
        fontSize: "14px",
        fontWeight: "bold",
        backgroundColor: "#eaeaeaff",
        color: "#000",
        border: "2px solid #b0b0b0ff",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background 0.3s, border-color 0.3s",
    },
    icon: {
        fontSize: "35px",      // ícone um pouco maior
        color: "#000",
        marginBottom: "10px",
    },
    texto: {
        fontSize: "15px",
        color: "#374151",
        lineHeight: "1.2",
    },
textoBold: {
        fontSize: "15px",
        color: "#374151",
        lineHeight: "1.0",
        fontWeight: "bold",
    },
};


export default RegistroPonto;
