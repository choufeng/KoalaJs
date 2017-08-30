'use strict'
const jwt = require('jsonwebtoken')
const config = require('../config')
const mUser = require('../models/mUser')
const untils = require('../untils')
const Chance = require('chance')
const logger = require('logger')
const cAuth = {
  auth: async (ctx) => {
    // 获取用户名和密码， 判断数据是否正确。
    //  生成token 返回 
    let user = await mUser.findOne({
      attributes: ['username', 'password', 'id'],
      where: {
        username: ctx.request.body.username
      }
    })
    logger.info(user)
    // 计算密码是否正确
    let pass = untils.decrypt(user.password)
    if (pass === ctx.request.body.password) {
      let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
          username: user.username,
          id: user.id
        }
      }, config.jwtSecret)
      let t = jwt.verify(token, config.jwtSecret)
      ctx.body = {token: token, t: t}
    } else {
      ctx.status = 401
      ctx.body = {error: '密码错误'}
    }
  },
  initAccount: async (ctx) => {
    let result = await mUser.findOrCreate({
      where: {
        username: 'admin'
      },
      defaults: {
        password: untils.encrypt('123123'),
        id: new Chance().guid()
      }
    })
    ctx.body = result
  }
}

module.exports = cAuth
