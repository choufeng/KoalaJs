const NodeRSA = require('node-rsa')
const rsa = new NodeRSA({b: 512})
let key = rsa.exportKey('pkcs8')
console.dir('警告：对已经上线的项目修改config.rsaKey将会导致已经使用RSA加密的文本全部作废， 建议只在项目初始化时在本地生成新key，基于安全原因，本程序不会自动配置到config。请将本代码回填到config配置文件中')
console.dir(key)

const Chance = require('chance')
console.dir('下面是生成随机64位字符串, 用于jwtSecret生成')
console.dir(new Chance().hash({length: 64}))