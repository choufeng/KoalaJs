const config = require('./config')
const NodeRSA = require('node-rsa')
const untils = {
  encrypt: (string) => {
    let key = new NodeRSA()
    key.importKey(config.rsaKey, 'pkcs8')
    return key.encrypt(string, 'base64')
  },
  decrypt: (string) => {
    let key = new NodeRSA()
    key.importKey(config.rsaKey, 'pkcs8')
    return key.decrypt(string, 'utf8')
  }
}

module.exports = untils