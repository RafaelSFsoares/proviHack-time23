'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colaborador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Colaborador.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    lingua: DataTypes.STRING,
    xp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Colaborador',
  });
  return Colaborador;
};