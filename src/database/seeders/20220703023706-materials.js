'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Materials', [{
        name: 'oro',
       createdAt: new Date
      },
      {
        name: 'plata',
       createdAt: new Date
      },
      {
        name: 'fantasia',
       createdAt: new Date
      }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
