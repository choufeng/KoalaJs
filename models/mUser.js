const { db, Sequelize } = require('../db')
const untils = require('../untils')
const Chance = require('chance')
var mUser = db.define('users', {
  id: {
    type: Sequelize.STRING,
    field: 'id',
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    filed: 'username'
  },
  password: {
    type: Sequelize.STRING,
    filed: 'password'
  }
}, {
  freezeTableName: true
})

mUser.sync().then(() => {
  mUser.findOrCreate({
    where: {
      username: 'admin'
    },
    defaults: {
      password: untils.encrypt('123123'),
      id: new Chance().guid()
    }
  })
})

module.exports = mUser
