'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100), 
        allowNull: false
      },
      primary: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      productId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        
          references: {
            model: {
              tableName : 'Products'
            },
            key: 'id'
     
        },
     
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
    await queryInterface.dropTable('Images');
  }
};