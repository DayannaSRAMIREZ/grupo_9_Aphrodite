'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sizeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model:{
            tableName: 'Sizes'
          },
          key : 'id'
        }
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      units: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model:{
            tableName: 'Categories'
          },
          key : 'id'
        }
      },
      materialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model :{
            tableName : 'Materials'
          }, 
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }, 
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};