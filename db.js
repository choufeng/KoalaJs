const Sequelize = require('sequelize')
const config = require('./config')

var db = new Sequelize(config.db_database, config.db_username, config.db_password, {
  host: config.db_host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

module.exports = { db, Sequelize }
