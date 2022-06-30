'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Material.hasMany(models.Product,{
        as : 'products',
        foreignKey : 'materialsId'
       })
      
    }
    }
  
  Material.init({
    name: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};