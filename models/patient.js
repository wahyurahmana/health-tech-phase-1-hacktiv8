"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static showPasient(role){
      let option = {
        include: [sequelize.models.Disease],
        order: [["createdAt", "DESC"]]
      }

      if (role === 'dokter') {
        option.where = {status : 'pending'}
      }
      if(role === 'apotek'){
        option.where = {status : 'obat'}
      }

      return new Promise((resolve, reject)=>{
        Patient.findAll(option)
          .then((data) => {
            resolve(data)
          })
          .catch((err) => reject(err));
      })
    }

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
      hooks: {
        beforeCreate(app) {
          app.status = "pending";
          app.obat = null;
        },
      },
    }
  );
  return Patient;
};
