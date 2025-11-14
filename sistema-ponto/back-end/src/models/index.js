const sequelize = require("../config/database");

const Usuario = require("./Usuario");
const Administrador = require("./Administrador");
const Funcionario = require("./Funcionario");
const RegistroPonto = require("./RegistroPonto");
const Justificativa = require("./Justificativa");

// USUÁRIO 1-1 ADMIN
Usuario.hasOne(Administrador, { foreignKey: "id_usuario" });
Administrador.belongsTo(Usuario, { foreignKey: "id_usuario" });

// USUÁRIO 1-1 FUNCIONÁRIO
Usuario.hasOne(Funcionario, { foreignKey: "id_usuario" });
Funcionario.belongsTo(Usuario, { foreignKey: "id_usuario" });

// FUNCIONÁRIO 1-N REGISTROS
Funcionario.hasMany(RegistroPonto, { foreignKey: "id_funcionario" });
RegistroPonto.belongsTo(Funcionario, { foreignKey: "id_funcionario" });

// REGISTRO 1-N JUSTIFICATIVAS
RegistroPonto.hasMany(Justificativa, { foreignKey: "id_registro" });
Justificativa.belongsTo(RegistroPonto, { foreignKey: "id_registro" });

// ADMIN 1-N JUSTIFICATIVAS
Administrador.hasMany(Justificativa, { foreignKey: "id_administrador" });
Justificativa.belongsTo(Administrador, { foreignKey: "id_administrador" });

module.exports = {
  sequelize,
  Usuario,
  Administrador,
  Funcionario,
  RegistroPonto,
  Justificativa
};
