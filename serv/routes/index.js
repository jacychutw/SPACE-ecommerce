var express = require('express');
var router = express.Router();
var sp = require('spgateway-js');
var sha256 = require('sha256');

const orders = {}; //當資料庫

const spgateway = {
  HashKey: process.env.HASHKEY,
  HashIV: process.env.HASHIV,
  MerchantID: process.env.MERCHANTID,
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 對應到下方的 POST */
router.get('/checkout/:id', function(req, res, next) {
  const id = req.param('id');
  const data = orders[id];

  let key = spgateway.HashKey;
  let iv = spgateway.HashIV;

  // 產生傳送給藍新的參數
  var trade = sp.encrypt(key, iv, {
    MerchantID: spgateway.MerchantID,
    RespondType: 'JSON',
    TimeStamp: data.timestamp,
    Version: 1.5,
    MerchantOrderNo: data.timestamp,
    Amt: data.Amt,
    ItemDesc: data.ItemDesc,
    Email: data.Email,
  })
  console.log(trade.TradeInfo);

  // let parameter = `MerchantID=${spgateway.MerchantID}&RespondType=JSON&Timestamps=${data.timestamp}&Version=1.5&MerchantOrderNo=${data.timestamp}&Amt=${data.Amt}&ItemDesc=${data.ItemDesc}&Email=${data.Email}`;
  let parameter = `HashKey=${spgateway.HashKey}&${trade.TradeInfo}&HashIV=${spgateway.HashIV}`;
  //console.log(data,parameter);
  // parameter已經組合完成，準備可以SHA加密了
  const tradeinfo = trade.TradeInfo;
  const sha = sha256(parameter).toUpperCase();
  console.log(sha);
  res.render('checkout', { title: 'Express', data, tradeinfo, sha });
});

/* POST 送資料 */
router.post('/order_create', function(req, res) {
  const data = req.body;
  //加上時間戳記跟訂單編號
  const dateTime = Date.now();
  const timestamp = Math.floor(dateTime / 1000);
  data.timestamp = timestamp;
  orders[timestamp] = data;
  res.redirect(`/checkout/${timestamp}`)
  console.log(orders)
})

module.exports = router;
