const Sequelize = require('sequelize');
const sequelize = new Sequelize('reco', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    timestamps: false
},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port: process.env.DB_PORT,
  operatorsAliases: false
});

module.exports = sequelize
