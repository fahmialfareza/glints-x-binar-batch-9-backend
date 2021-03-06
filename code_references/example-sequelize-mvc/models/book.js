'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    isbn: DataTypes.STRING,
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: {
      type: DataTypes.STRING,
      //Set custom getter for book image using URL
      get() {
        const image = this.getDataValue('image');
        return "/img/" + image;
      }
    }
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Book',
  });
  return Book;
};
