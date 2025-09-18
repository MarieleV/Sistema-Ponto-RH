import React from "react";
import logo from "../assets/logo.png";
import { FaBell } from "react-icons/fa"; // icone de notificacao

function Header({ usuario }) {
    return (
    <header style={styles.header}>
        <div style={styles.left}>
        <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <div style={styles.right}>
        <span style={styles.user}>{usuario}</span>
        <FaBell style={styles.icon} />
        </div>
    </header>
    );
}

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#000000", // preto
        color: "#fff",
    },
    left: { display: "flex", alignItems: "center" },
    logo: { height: "40px" },
    right: { display: "flex", alignItems: "center", gap: "15px" },
    user: { fontWeight: "bold" },
    icon: { fontSize: "20px", cursor: "pointer" },
};

export default Header;
