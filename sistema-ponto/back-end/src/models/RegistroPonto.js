const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RegistroPonto = sequelize.define("registro_ponto", {
  id_registro: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_funcionario: { type: DataTypes.INTEGER, allowNull: false },
  data_registro: { type: DataTypes.DATEONLY, allowNull: false },

  entrada1: { type: DataTypes.TIME, allowNull: true },
  saida1: { type: DataTypes.TIME, allowNull: true },
  entrada2: { type: DataTypes.TIME, allowNull: true },
  saida2: { type: DataTypes.TIME, allowNull: true },
  entrada3: { type: DataTypes.TIME, allowNull: true },
  saida3: { type: DataTypes.TIME, allowNull: true },
  entrada4: { type: DataTypes.TIME, allowNull: true },
  saida4: { type: DataTypes.TIME, allowNull: true },

  saldo_trabalhado: { type: DataTypes.TIME, allowNull: true },
  status_registro: {
    type: DataTypes.ENUM("OK", "Incompleto", "Erro"),
    allowNull: false,
    defaultValue: "Erro"
  }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = RegistroPonto;
