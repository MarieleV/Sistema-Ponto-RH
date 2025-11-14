const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Justificativa = sequelize.define("justificativa", {
    id_justificativa: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_registro: { type: DataTypes.INTEGER, allowNull: false },
    id_administrador: { type: DataTypes.INTEGER, allowNull: true },

    motivo_justificativa: { type: DataTypes.ENUM("Esquecimento", "Consulta", "Atestado", "Outro"), allowNull: false },
    anexo_justificativa1: { type: DataTypes.STRING(255), allowNull: true },
    hora_correta: { type: DataTypes.TIME, allowNull: true },
    justificativa_escrita: { type: DataTypes.TEXT, allowNull: true },

    status_analise: {
        type: DataTypes.ENUM("Aguardando Retorno", "Aceito", "Negado"),
        allowNull: false,
        defaultValue: "Aguardando Retorno"
    },

    data_justificativa: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
    timestamps: false,
    freezeTableName: true
    });

module.exports = Justificativa;
