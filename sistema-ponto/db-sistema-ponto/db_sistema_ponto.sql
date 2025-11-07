SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- =========================================================================
-- SCHEMA
-- =========================================================================
CREATE SCHEMA IF NOT EXISTS `db_sistema_ponto` 
DEFAULT CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE `db_sistema_ponto`;

-- =========================================================================
-- TABELA: usuario
-- =========================================================================
CREATE TABLE IF NOT EXISTS `usuario` (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(120) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  tipo_usuario ENUM('Funcionario', 'Administrador') NOT NULL,
  PRIMARY KEY (id_usuario)
) ENGINE=InnoDB;

-- =========================================================================
-- TABELA: funcionario
-- =========================================================================
CREATE TABLE IF NOT EXISTS `funcionario` (
  id_funcionario INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NOT NULL UNIQUE,

  nome_funcionario VARCHAR(150) NOT NULL,
  rg_funcionario VARCHAR(20) NOT NULL,
  cpf_funcionario CHAR(11) NOT NULL,
  rg_expedicao_func VARCHAR(10) NOT NULL,
  telefone_funcionario VARCHAR(20) NOT NULL,
  genero_funcionario ENUM('Masculino', 'Feminino', 'Outro') NOT NULL,
  dt_nascimento DATE NOT NULL,
  setor VARCHAR(80) NOT NULL,
  funcao VARCHAR(80) NULL,
  cargo VARCHAR(80) NULL,

  status_funcionario ENUM('Ativo', 'Inativo') NOT NULL DEFAULT 'Ativo',

  UNIQUE KEY (rg_funcionario),
  UNIQUE KEY (cpf_funcionario),

  PRIMARY KEY (id_funcionario),

  CONSTRAINT fk_func_usuario
      FOREIGN KEY (id_usuario)
      REFERENCES usuario(id_usuario)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =========================================================================
-- TABELA: administrador
-- =========================================================================
CREATE TABLE IF NOT EXISTS `administrador` (
  id_administrador INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NOT NULL UNIQUE,

  nome_administrador VARCHAR(150) NOT NULL,

  PRIMARY KEY (id_administrador),

  CONSTRAINT fk_admin_usuario
      FOREIGN KEY (id_usuario)
      REFERENCES usuario(id_usuario)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =========================================================================
-- TABELA: registro_ponto
-- =========================================================================
CREATE TABLE IF NOT EXISTS `registro_ponto` (
  id_registro INT NOT NULL AUTO_INCREMENT,
  id_funcionario INT NOT NULL,

  data_registro DATE NOT NULL,

  entrada1 TIME NULL,
  saida1 TIME NULL,
  entrada2 TIME NULL,
  saida2 TIME NULL,
  entrada3 TIME NULL,
  saida3 TIME NULL,
  entrada4 TIME NULL,
  saida4 TIME NULL,

  saldo_trabalhado TIME NULL,

  status_registro ENUM('OK', 'Incompleto', 'Erro') NOT NULL DEFAULT 'Erro',

  PRIMARY KEY (id_registro),

  UNIQUE KEY uq_registro_dia (id_funcionario, data_registro),

  CONSTRAINT fk_reg_func
      FOREIGN KEY (id_funcionario)
      REFERENCES funcionario(id_funcionario)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =========================================================================
-- TABELA: justificativa
-- =========================================================================
CREATE TABLE IF NOT EXISTS `justificativa` (
  id_justificativa INT NOT NULL AUTO_INCREMENT,

  id_registro INT NOT NULL,
  id_administrador INT NULL,

  motivo_justificativa ENUM('Esquecimento', 'Consulta', 'Atestado', 'Outro') NOT NULL,

  anexo_justificativa1 VARCHAR(255) NULL,
  anexo_justificativa2 VARCHAR(255) NULL,

  hora_correta TIME NULL,
  justificativa_escrita TEXT(500) NULL,

  status_analise ENUM('Aguardando Retorno', 'Aceito', 'Negado')
      NOT NULL DEFAULT 'Aguardando Retorno',

  data_justificativa TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id_justificativa),

  INDEX fk_jus_reg_idx (id_registro),
  INDEX fk_jus_admin_idx (id_administrador),

  CONSTRAINT fk_jus_reg
      FOREIGN KEY (id_registro)
      REFERENCES registro_ponto(id_registro)
      ON DELETE CASCADE
      ON UPDATE CASCADE,

  CONSTRAINT fk_jus_admin
      FOREIGN KEY (id_administrador)
      REFERENCES administrador(id_administrador)
      ON DELETE SET NULL
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =========================================================================
-- RESTAURA CONFIGURAÇÕES
-- =========================================================================
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
