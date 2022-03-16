"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.Disease);
    }
  }
  Patient.init(
    {
      name: DataTypes.STRING,
      nik: DataTypes.STRING,
      age: DataTypes.INTEGER,
      address: DataTypes.STRING,
      status: DataTypes.STRING,
      obat: DataTypes.STRING,
      DiseaseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );
  return Patient;
};
