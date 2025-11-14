const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define("usuario", {
  id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING(120), allowNull: false, unique: true },
  senha: { type: DataTypes.STRING(255), allowNull: false },
  tipo_usuario: { type: DataTypes.ENUM("Funcionario", "Administrador"), allowNull: false }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Usuario;
