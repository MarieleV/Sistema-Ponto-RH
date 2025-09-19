import React from "react";
import { FaFilter, FaRegCalendarAlt } from "react-icons/fa";
 
const Indicadores = () => {
  return (
    <main style={styles.main}>
      {/* Caixa de opções */}
      <div style={styles.options}>
        <div style={styles.filtro}>
          <button style={styles.botaoFiltrar}>
            Filtrar <FaFilter style={styles.iconFiltro} />
          </button>
        </div>
 
        <div style={styles.calendario}>
          <input type="date" id="inputCalendario" style={styles.inputCalendario} />
          <label htmlFor="inputCalendario" style={styles.iconCalendario}>
            <FaRegCalendarAlt style={styles.iconCalendarioImg} />
          </label>
        </div>
      </div>
 
      {/* Gráficos fictícios */}
      <div style={styles.graficosContainer}>
        <div style={styles.graficoCard}>
          <h3>Horas Extras</h3>
          <div style={styles.placeholderChart}>Gráfico aqui</div>
        </div>
        <div style={styles.graficoCard}>
          <h3>Horas Faltantes</h3>
          <div style={styles.placeholderChart}>Gráfico aqui</div>
        </div>
      </div>
    </main>
  );
};
 
// Estilos inline
const styles = {
  main: { flexGrow: 1, padding: "20px", paddingTop: "10px", overflowY: "auto", background: "#f6f6f7", minHeight: "100vh" },
  options: { background: "white", border: "1px solid #ddd", borderRadius: "2px", padding: "10px 15px", marginBottom: "20px", display: "flex", gap: "20px", alignItems: "center" },
  filtro: { borderBottom: "1px solid #eee", marginBottom: "10px", paddingBottom: "5px" },
  botaoFiltrar: { display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", fontWeight: 550, background: "none", border: "none", cursor: "pointer", color: "black" },
  iconFiltro: { fontSize: "18px" },
  calendario: { position: "relative", width: "200px", marginTop: "10px" },
  inputCalendario: { padding: "8px 45px 8px 10px", fontSize: "14px", border: "1px solid #ccc", borderRadius: "4px", outline: "none", height: "40px", cursor: "pointer", width: "100%", boxSizing: "border-box" },
  iconCalendario: { display: "flex", justifyContent: "center", alignItems: "center", width: "40px", height: "40px", border: "none", background: "none", cursor: "pointer", position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)" },
  iconCalendarioImg: { fontSize: "22px" },
  graficosContainer: { display: "flex", justifyContent: "flex-start", gap: "30px", flexWrap: "wrap" },
  graficoCard: { width: "350px", background: "white", padding: "10px 20px 20px 20px", border: "1px solid #ddd", borderRadius: "2px", textAlign: "center", height: "220px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" },
  placeholderChart: { width: "160px", height: "160px", background: "#eee", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", color: "#666", fontSize: "14px" },
};
 
export default Indicadores;