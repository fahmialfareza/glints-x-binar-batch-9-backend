'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [{
      isbn: '9781785883262',
      name: 'Android Programming for Beginners',
      year: '2015',
      author: "John Horton",
      description: "Learn Android application development with this accessible tutorial that takes you through Android and Java programming with practical and actionable steps.",
      image: "9781785883262.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      isbn: '9781787121799',
      name: 'Practical Game Design',
      year: '2018',
      author: "Adam Kramarzewski, Ennio De Nucci",
      description: "Design accessible and creative games across genres, platforms, and development realities",
      image: "B06082.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      isbn: '9781788293631',
      name: 'Learn Node.js by Building 6 Projects',
      year: '2018',
      author: "Eduonix Learning Solutions",
      description: "This is an advanced, practical guide to harnessing the power of Node.js by creating 6 full-scale real-world projects, from creating a chat application to an eLearning system.",
      image: "B07858_cover.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Book', null, {})
  }
};
