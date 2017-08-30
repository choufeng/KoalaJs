const untils = require('../untils')
// const NodeRSA = require('node-rsa')
const cHome = {
  index: function (ctx) {
    let d = untils.encrypt('good')
    let e = untils.decrypt('Yk0TYLwdiys5Q0dlmM0q1KFs8cl72nupF7MWpEZ/L7Zk6g3+rU1/tBAPxbESIl1+0xEMGiiNoaw121pXQ745EA==')
    let data = {a: d, b: ctx.ddd, e: e}
    ctx.body = data
  },
  test: function (ctx) {
    // ctx.res.statusCode = 500
    // let data = {a: 'hello', b: ctx.res.statusCode}
    // ctx.body = data
    // ctx.throw(502, 'name required')
    // 
    // 随机生成方式
    // const key = new NodeRSA({b: 512})
    // let kkk = key.exportKey('pkcs8')
    // let code = key.encrypt('gooood', 'base64')

    // const key2 = new NodeRSA()
    // key2.importKey(kkk, 'pkcs8')
    // let sss = key2.decrypt(code, 'utf8')

  },
}

module.exports = cHome
