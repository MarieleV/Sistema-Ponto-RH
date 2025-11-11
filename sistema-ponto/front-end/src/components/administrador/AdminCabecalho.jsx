import React from "react";
import logo from "../../assets/Logo-Consulth.png";
import { FaBell } from "react-icons/fa";

const AdminCabecalho = ({ usuario }) => {
    return (
    <nav style={styles.nav}>
        <div style={styles.logoArea}>
            <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <div style={styles.right}>
            <span style={styles.usuario}>Olá, <strong>{usuario}</strong></span>
            <FaBell style={styles.icon} />
        </div>
    </nav>
    );
};

const styles = {
    nav: {
        background: "black",
        padding: "15px 25px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
        logo: { height: "40px" },
    right: { display: "flex", alignItems: "center", gap: "20px" },
    usuario: { fontSize: "16px" },
    icon: { fontSize: "22px", cursor: "pointer" }
};

export default AdminCabecalho;
