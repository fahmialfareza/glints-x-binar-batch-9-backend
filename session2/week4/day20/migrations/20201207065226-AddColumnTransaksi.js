'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Transaksi',
        'image1',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'Transaksi',
        'image2',
        Sequelize.STRING
      )
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Transaksi',
        'image1'
       ),
      queryInterface.removeColumn(
        'Transaksi',
        'image2'
      )
    ]);
  }
};
