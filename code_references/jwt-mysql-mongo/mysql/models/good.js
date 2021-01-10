'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class good extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  good.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    user_id: DataTypes.INTEGER,
    image: {
      type: DataTypes.STRING,
      //Set custom getter for book image using URL
      get() {
        const image = this.getDataValue('image');
        return "/images/" + image;
      }
    }
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'good',
  });
  return good;
};
