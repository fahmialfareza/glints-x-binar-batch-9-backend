'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Barang.init({
    nama: DataTypes.STRING,
    harga: DataTypes.DECIMAL,
    id_pemasok: DataTypes.INTEGER,
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
    paranoid: true, // Activate deletedAt column
    timestamps: true,
    freezeTableName: true,
    modelName: 'Barang',
  });
  return Barang;
};
