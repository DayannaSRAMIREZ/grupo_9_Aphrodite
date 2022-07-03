'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Image, {
        as: 'images',
        foreignKey: 'productId'
      })

      Product.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'categoryId'
      })
      Product.belongsTo(models.Material, {
        as: 'material',
        foreignKey: 'materialId'
      })
      Product.belongsTo(models.Size, {
        as: 'size',
        foreignKey: 'sizeId'
      })
    }

  }
  Product.init({
    name: DataTypes.STRING(50),
    price: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    units: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    materialId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};