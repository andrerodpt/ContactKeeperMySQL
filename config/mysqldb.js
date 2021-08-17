const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'mysql://root:b*3eNm-gzREbx!5@localhost:3306/crossfit_app'
);

module.exports = sequelize;
