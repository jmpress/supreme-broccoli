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
      fileName: {
        type: Sequelize.STRING,
        validate: {
          is: /^[\w\-\.]$/
        }
      },
      imageURL: {
        type: Sequelize.STRING,
        validate: {
          isURL: true
        }
      },
      rating: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true,
          max: 5,
          min: 1
        }
      },
      uploaderID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
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
    await queryInterface.dropTable('Images');
  }
};