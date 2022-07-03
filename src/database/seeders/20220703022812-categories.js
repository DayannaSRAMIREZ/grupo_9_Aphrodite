'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [{
        name: 'anillos',
        createdAt: new Date
      },
      {
        name: 'collares',
        createdAt: new Date
      },
      {
        name: 'pulseras',
        createdAt: new Date
      },
      {
        name: 'relojes',
        createdAt: new Date
      },
      {
        name: 'aritos',
        createdAt: new Date
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};