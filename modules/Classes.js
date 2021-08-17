const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/mysqldb');

const Class = db.define(
  'Class',
  {
    name: {
      type: Sequelize.STRING,
    },
    details: {
      type: Sequelize.TEXT,
    },
    date: {
      type: Sequelize.DATE,
    },
    start: {
      type: Sequelize.TIME,
    },
    duration: {
      type: Sequelize.FLOAT,
    },
    staff: {
      type: Sequelize.INTEGER,
    },
    placesTotal: {
      type: Sequelize.INTEGER,
    },
    placesOccupied: {
      type: Sequelize.INTEGER,
    },
    placesWait: {
      type: Sequelize.INTEGER,
    },
    isDone: {
      type: Sequelize.BOOLEAN,
    },
    isDisabled: {
      type: Sequelize.BOOLEAN,
    },
    classType: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: 'classes',
  }
);

module.exports = User;
