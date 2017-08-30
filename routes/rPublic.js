'use strict'
const router = require('koa-router')
const cAuth = require('../controllers/cAuth')
const cHome = require('../controllers/cHome')
const cDemo = require('../controllers/cDemo')
const rPublic = new router()
rPublic.get('/', cHome.index)
rPublic.post('/login', cAuth.auth)
rPublic.get('/auth/init', cAuth.initAccount)

rPublic.get('/demo', cDemo.index)
rPublic.get('/demo/:id', cDemo.withid)
rPublic.post('/demo', cDemo.post)
rPublic.delete('/demo/:id', cDemo.delete)
rPublic.put('/demo/:id', cDemo.put)
rPublic.patch('/demo/:id', cDemo.patch)

rPublic.get('/db/add', cDemo.add)

module.exports = rPublic
