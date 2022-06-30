'use strict';
const {
  Model
} = require('sequelize');
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
    name: DataTypes.STRING(50),
    surname: DataTypes.STRING(50),
    email: DataTypes.STRING(50),
    gender: DataTypes.CHAR,
    dob: DataTypes.DATE,
    password: DataTypes.STRING(100),
    country: DataTypes.STRING(50),
    rol: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};