const Sequelize = require('sequelize');
const db = require('../config/mysqldb');

const User = db.define(
  'User',
  {
    name: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: 'users',
  }
);

module.exports = User;
