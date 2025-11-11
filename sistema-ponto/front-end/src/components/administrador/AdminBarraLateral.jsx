import React, { useState } from "react";

const AdminSidebar = ({ onNavigate }) => {
  const [selected, setSelected] = useState("adminDashboard");

  const handleClick = (page) => {
    setSelected(page);
    onNavigate(page);
  };

  return (
    <aside style={styles.container}>
      <ul style={styles.list}>
        {[
          { key: "adminDashboard", label: "Dashboard" },
          { key: "gestaoColaborador", label: "Gestão de Colaboradores" },
          { key: "gestaoJustificativas", label: "Gestão de Justificativas" },
          { key: "relatorios", label: "Relatórios" },
          { key: "adminConfig", label: "Configurações" },
          { key: "login", label: "Sair" },
        ].map((item) => (
          <li
            key={item.key}
            style={{
              ...styles.item,
              ...(selected === item.key ? styles.selected : {})
            }}
            onClick={() => handleClick(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const styles = {
  container: {
    width: "260px",
    backgroundColor: "#fff",
    height: "100vh",
    boxShadow: "2px 0 4px rgba(0,0,0,0.1)"
  },
  list: { listStyle: "none", padding: 0, margin: 0 },
  item: {
    padding: "15px 20px",
    cursor: "pointer",
    fontWeight: 500
  },
  selected: {
    background: "#f3f4f6",
    borderLeft: "4px solid black",
    fontWeight: 600
  }
};

export default AdminSidebar;
