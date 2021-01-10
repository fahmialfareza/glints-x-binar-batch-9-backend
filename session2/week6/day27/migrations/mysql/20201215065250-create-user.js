'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        unique: true, // make email unique
        allowNull: false // make not null
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false // make not null
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false // make not null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // enable soft delete column
      deletedAt: {
        allowNull: true, // make nullable
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
