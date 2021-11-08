var sp = require('spgateway-js');
var sha256 = require('sha256');

export default {
  // 加密取得 TradeInfo
  encryptTradeInfo(key, iv, word) {
    var encrypted = sp.encrypt(key, iv, word)
    return encrypted.TradeInfo
  },
  encryptSha(parameter) {
    var sha = sha256(parameter);
    return sha
  },
}