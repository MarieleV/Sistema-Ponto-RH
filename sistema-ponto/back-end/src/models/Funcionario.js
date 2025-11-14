const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Funcionario = sequelize.define("funcionario", {
    id_funcionario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    nome_funcionario: { type: DataTypes.STRING(150), allowNull: false },
    rg_funcionario: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    cpf_funcionario: { type: DataTypes.CHAR(11), allowNull: false, unique: true },
    telefone_funcionario: { type: DataTypes.STRING(20), allowNull: false },
    genero_funcionario: { type: DataTypes.ENUM("Masculino", "Feminino", "Outro"), allowNull: false },
    dt_nascimento: { type: DataTypes.DATEONLY, allowNull: false },
    setor: { type: DataTypes.STRING(80), allowNull: false },
    funcao: { type: DataTypes.STRING(80), allowNull: true },
    cargo: { type: DataTypes.STRING(80), allowNull: true },
    status_funcionario: { type: DataTypes.ENUM("Ativo", "Inativo"), allowNull: false, defaultValue: "Ativo" }
}, {
    timestamps: false,
    freezeTableName: true
    });

module.exports = Funcionario;
