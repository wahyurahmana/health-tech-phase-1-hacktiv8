'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(12);

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {msg : 'Username Tidak Boleh Kosong'}
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {msg : 'Email Tidak Boleh Kosong'}
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {msg : 'Password Tidak Boleh Kosong'},
        len : [8, 12]
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate : (user) => {
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  });
  return User;
};