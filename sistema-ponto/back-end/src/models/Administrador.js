const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Administrador = sequelize.define("administrador", {
    id_administrador: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    nome_administrador: { type: DataTypes.STRING(150), allowNull: false }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Administrador;
