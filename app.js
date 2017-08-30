const Koa = require('koa')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const jwt = require('koa-jwt')
const config = require('./config')
const statusCode = require('./statusCode')
const rPublic = require('./routes/rPublic')
const rValidate = require('./routes/rValidate')

const app = new Koa()

// ctx.ddd 就可以调用到
// app.context.ddd = 'good day ddd'

// error handler
onerror(app)

// middlewares
app.use(koaBody({multipart: true}))
app.use(bodyparser({
  enableTypes:['json', 'form']
}))
app.use(json())
app.use(logger())

// 增加对请求的过滤，对options的支持
app.use(async(ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", '*')
  ctx.set("Access-Control-Allow-Credentials", true);
  ctx.set("Access-Control-Max-Age", 86400000);
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE, PATCH");
  ctx.set("Access-Control-Allow-Headers", "Authorization, x-requested-with, accept, origin, content-type");
  if (ctx.request.method == 'OPTIONS') {
    ctx.response.status = 200
  } else {
    await next()
  }
})

// 不需要JWT验证的api
app.use(rPublic.routes(), rPublic.allowedMethods())
// 启动JWT验证
app.use(jwt({secret: config.jwtSecret}))
// 需要JWT验证的api
app.use(rValidate.routes(), rValidate.allowedMethods())

app.use((ctx, next) => {
  statusCode(ctx, next)
})

module.exports = app
