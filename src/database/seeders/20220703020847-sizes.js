'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Sizes', [{
        name: 's',
        createdAt: new Date
      },
      {
        name: 'm',
        createdAt: new Date
      },
      {
        name: 'l',
        createdAt: new Date
      },
      {
        name: 'xs',
        createdAt: new Date
      },
      {
        name: 'xl',
        createdAt: new Date
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Sizes', null, {});

  }
};