'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Captions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      captionContent: {
        type: Sequelize.STRING
      },
      imageID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Images',
          key: 'id',
          //deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        },
        onDelete: 'CASCADE'
      },
      captionerID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          //deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        },
        onDelete: 'CASCADE'
      },
      rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Captions');
  }
};