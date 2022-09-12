'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      token: '',
      password: '$2b$10$Aswz1dKM6X49RR/ix6AzYeMAEWABnUFKlSvCsZrUG6z3e3HzRpZZK',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
