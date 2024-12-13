const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  senha: { type: DataTypes.STRING, allowNull: false },
  setor: { type: DataTypes.STRING, allowNull: false },
  tipo_usuario: { type: DataTypes.ENUM('administrador', 'financeiro', 'enfermagem', 'medico'), allowNull: false },
}, {
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = Usuario;
