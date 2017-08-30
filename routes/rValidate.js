const router = require('koa-router')
const cHome = require('../controllers/cHome')
const rValidate = new router()
rValidate.get('/jwt', cHome.index)

module.exports = rValidate
