import React from "react";
import { FaFilter, FaRegCalendarAlt } from "react-icons/fa";
import confirmarIcon from "../assets/Icon-Confirmado.png";
 
const CartaoPonto = () => {
  return (
    <main style={styles.dashboardMain}>
      {/* Caixa de opções */}
      <div style={styles.options}>
        <div style={styles.filtro}>
          <button style={styles.botaoFiltrar}>
            Filtrar <FaFilter style={styles.icon} />
          </button>
        </div>
 
        <div style={styles.calendario}>
          <input type="date" id="inputCalendario" style={styles.inputCalendario} />
          <label htmlFor="inputCalendario" style={styles.iconCalendario}>
            <FaRegCalendarAlt style={styles.iconCalendarioImg} />
          </label>
        </div>
      </div>
 
      {/* Tabela de ponto */}
      <table style={styles.tabelaPonto}>
        <thead>
          <tr>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Data</th>
            <th style={styles.th}>Entrada 1</th>
            <th style={styles.th}>Saída 1</th>
            <th style={styles.th}>Entrada 2</th>
            <th style={styles.th}>Saída 2</th>
            <th style={styles.th}>Entrada 3</th>
            <th style={styles.th}>Saída 3</th>
            <th style={styles.th}>Entrada 4</th>
            <th style={styles.th}>Saída 4</th>
            <th style={styles.th}>Saldo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.cell}>
              <img src={confirmarIcon} alt="Confirmado" style={styles.confirmarImg} />
            </td>
            <td style={styles.cell}>Sexta-feira, 05/09</td>
            <td style={styles.cell}>08:30</td>
            <td style={styles.cell}>12:00</td>
            <td style={styles.cell}>13:00</td>
            <td style={styles.cell}>18:00</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>08:30</td>
          </tr>
          <tr>
            <td style={styles.cell}>
              <img src={confirmarIcon} alt="Confirmado" style={styles.confirmarImg} />
            </td>
            <td style={styles.cell}>Quinta-feira, 04/09</td>
            <td style={styles.cell}>09:00</td>
            <td style={styles.cell}>12:00</td>
            <td style={styles.cell}>13:30</td>
            <td style={styles.cell}>18:15</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>08:45</td>
          </tr>
          <tr>
            <td style={styles.cell}>
              <img src={confirmarIcon} alt="Confirmado" style={styles.confirmarImg} />
            </td>
            <td style={styles.cell}>Quarta-feira, 03/09</td>
            <td style={{ ...styles.cell, ...styles.noWorkDayCell }} colSpan="9">Falta - Não Justificada</td>
          </tr>
          <tr>
            <td style={styles.cell}>
              <img src={confirmarIcon} alt="Confirmado" style={styles.confirmarImg} />
            </td>
            <td style={styles.cell}>Terça-feira, 02/09</td>
            <td style={styles.cell}>08:45</td>
            <td style={styles.cell}>12:15</td>
            <td style={styles.cell}>13:00</td>
            <td style={styles.cell}>17:50</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>08:20</td>
          </tr>
          <tr>
            <td style={styles.cell}>
              <img src={confirmarIcon} alt="Confirmado" style={styles.confirmarImg} />
            </td>
            <td style={styles.cell}>Segunda-feira, 01/09</td>
            <td style={{ ...styles.cell, ...styles.noWorkDayCell }} colSpan="9">Sem expediente</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
 
const styles = {
  dashboardMain: {
    flex: 1,
    padding: "20px",
    paddingTop: "10px",
    overflowY: "auto",
    fontFamily: "'Inter', sans-serif",
    background: "#f6f6f7",
  },
  options: {
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "2px",
    padding: "10px 15px",
    marginBottom: "20px",
  },
  filtro: {
    borderBottom: "1px solid #eee",
    marginBottom: "10px",
    paddingBottom: "5px",
  },
  botaoFiltrar: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "20px",
    fontWeight: "550",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "black",
  },
  icon: {
    fontSize: "18px",
  },
  calendario: {
    position: "relative",
    width: "200px",
    marginTop: "10px",
  },
  inputCalendario: {
    padding: "8px 45px 8px 10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    height: "40px",
    cursor: "pointer",
    width: "100%",
    boxSizing: "border-box",
  },
  iconCalendario: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    border: "none",
    background: "none",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: "5px",
    transform: "translateY(-50%)",
  },
  iconCalendarioImg: {
    fontSize: "22px",
  },
  confirmarImg: {
    height: "15px",
    cursor: "pointer",
  },
  cell: {
    textAlign: "center",
    verticalAlign: "middle",
    padding: "12px 8px",
    fontSize: "14px",
    borderBottom: "1px solid #eee",
  },
  tabelaPonto: {
    width: "100%",
    borderCollapse: "collapse",
    background: "white",
    marginTop: "30px",
    borderRadius: "4px",
    overflow: "hidden",
    border: "1px solid #ddd",
  },
  th: {
    padding: "12px 8px",
    textAlign: "center",
    fontSize: "14px",
    borderBottom: "1px solid #eee",
    background: "#f0f0f0",
    fontWeight: "600",
  },
  noWorkDayCell: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#666",
    background: "#fafafa",
  },
};
 
export default CartaoPonto;
