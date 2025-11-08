import React from "react";
import { RiUserLocationFill } from "react-icons/ri";

function RegistroPonto() {
    return (
    <div style={styles.container} className="w-full h-full mt-20 flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
      {/* Área de informações */}
        <div style={styles.infoArea} className="flex h-full w-full flex-col justify-end bg-zinc-100 pb-5 items-center gap-2">
            <div className="flex w-full h-1/2 items-center justify-center pb-24!">
                <RiUserLocationFill style={styles.icon}/>
            </div>
        
        <div className="flex h-fit w-full justify-end items-center flex-col pb-8! gap-2">
            <p style={styles.textoBold}>11/09/2025 - 12:00:05</p>
        <p style={styles.textoBold}>978.64 metros</p>
        <p style={styles.texto}>
        📍 Rua Ottokar Doerffel, Joinville, Santa Catarina, Brasil
        </p>
        </div>
        
        </div>

      {/* Área do botão */}
        <div style={styles.buttonArea}>
        <button style={styles.button}>Incluir Ponto</button>
        </div>
        </div>
    );
}

const styles = {
    
  
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
