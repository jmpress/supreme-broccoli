'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Caption.init({
    captionerEmail: DataTypes.STRING,
    caption: DataTypes.STRING,
    captionRating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Caption',
  });
  return Caption;
};