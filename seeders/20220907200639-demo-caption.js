'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Captions', [{
      captionContent: `HE! IS! FRANZ! KAF! KA!`,
      imageID: 1,
      captionerID: 1,
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      captionContent: `Check out my new glove, isn't it cool?`,
      imageID: 2,
      captionerID: 1,
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      captionContent: `It's called a Thunderbird, Brendan, look it up.`,
      imageID: 2,
      captionerID: 1,
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Captions', null, {});
  }
};
