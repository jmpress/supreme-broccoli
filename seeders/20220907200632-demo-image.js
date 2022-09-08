'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [{
      fileName: 'th-1706774238.jpeg',
      imageURL: 'http://localhost:3000/public/img/content/th-1706774238.jpeg',
      rating: 0,
      uploaderID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fileName: 'th-3094987114.jpeg',
      imageURL: 'http://localhost:3000/public/img/content/th-3094987114.jpeg',
      rating: 0,
      uploaderID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fileName: 'homemovies01.jpg',
      imageURL: 'http://localhost:3000/public/img/content/homemovies01.jpg',
      rating: 0,
      uploaderID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
