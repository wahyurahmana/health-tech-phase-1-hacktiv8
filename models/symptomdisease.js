'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SymptomDisease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    searchData(search){

    }
    static associate(models) {
      // define association here
      SymptomDisease.belongsTo(models.Symptom, {foreignKey : 'SymptomId'})
      SymptomDisease.belongsTo(models.Disease, {foreignKey : 'DiseaseId'})
    }
  }
  SymptomDisease.init({
    DiseaseId: DataTypes.INTEGER,
    SymptomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SymptomDisease',
  });
  return SymptomDisease;
};