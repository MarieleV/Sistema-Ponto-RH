import React from "react";
import logo from "../../assets/logo.png";
import { FaRegBell } from "react-icons/fa6";

function Header({ usuario }) {
    return (
    <header style={styles.header} className="absolute w-dvw h-16">
        <div style={styles.left}>
        <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <div style={styles.right}>
        <span style={styles.user}>{usuario}</span>
        <FaRegBell style={styles.icon} className="hover:fill-zinc-300"/>
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
