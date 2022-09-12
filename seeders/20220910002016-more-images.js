'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [{
      fileName: '1x01-Get-Away-From-my-Mom-home-movies-10527477-720-480.jpg',
      imageURL: 'img/content/1x01-Get-Away-From-my-Mom-home-movies-10527477-720-480.jpg',
      rating: 0,
      uploaderID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fileName: '616aab0f5a4ec0a0d11c39c3ed622dd5.jpg',
      imageURL: 'public/img/content/616aab0f5a4ec0a0d11c39c3ed622dd5.jpg',
      rating: 0,
      uploaderID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fileName: 'b5a032a8c8e622365ea3374716c9348b.jpg',
      imageURL: 'public/img/content/b5a032a8c8e622365ea3374716c9348b.jpg',
      rating: 0,
      uploaderID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fileName: 'b6e65897e1d661eda74008d389c21b0e.jpg',
      imageURL: 'public/img/content/b6e65897e1d661eda74008d389c21b0e.jpg',
      rating: 0,
      uploaderID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fileName: 'th-2156184116.jpeg',
      imageURL: 'public/img/content/th-2156184116.jpeg',
      rating: 0,
      uploaderID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fileName: 'th-3496903442.jpeg',
      imageURL: '../public/img/content/th-3496903442.jpeg',
      rating: 0,
      uploaderID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
