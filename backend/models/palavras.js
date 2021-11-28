'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Palavras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Palavras.init({
    lingua: DataTypes.STRING,
    palavra_nativa: DataTypes.STRING,
    palavra_portugues: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Palavras',
  });
  return Palavras;
};