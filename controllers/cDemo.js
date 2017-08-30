const mUser = require('../models/mUser')
const cDemo = {
  index: async (ctx) => {
    let list = await mUser.findAll({
      order: [['id', 'desc'],['title']]
    })
    ctx.body = list
  },
  add: async (ctx) => {
    ctx.body = await mUser.create({
      title: 'agood'
    })
  },
  withid: (ctx) => {
    let id = ctx.params.id
    ctx.body = 'hello ' + id
  },
  post: (ctx) => {
    let id = ctx.request.body.id || 0 //注意 request.body 是一个json
    ctx.body = 'your post data:id is ' + id
  },
  put: (ctx) => {
    let id =  ctx.params.id
    ctx.body = 'you want put data' + id
  },
  patch: (ctx) => {
    let id =  ctx.params.id
    ctx.body ='you want patch a data' + id
  },
  delete: (ctx) => {
    let id =  ctx.params.id
    ctx.body = 'you want to delete id:' + id
  }
}

module.exports = cDemo