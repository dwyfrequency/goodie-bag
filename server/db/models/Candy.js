const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quanity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    validate: {
      isUrl: true,
    },
  },
});
