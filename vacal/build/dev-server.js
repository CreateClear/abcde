require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
app.get('/productlists',function(req,res){
  res.json({
    'hot':[
      {'id':4,'url':'http://i3.m.vancl.com/wap/2017_6_29_15_20_40_3387_320x579.jpg'},
      {'id':3,'url':'http://i1.m.vancl.com/wap/2017_6_29_16_7_55_1413_320x579.jpg'},
      {'id':2,'url':'http://i3.m.vancl.com/wap/2017_6_22_17_3_5_3155_320x579.jpg'},
      {'id':1,'url':'http://i1.m.vancl.com/wap/2017_6_22_17_51_52_1094_320x579.jpg'},
      {'id':4,'url':'http://i7.m.vancl.com/wap/2017_6_29_15_21_55_7182_320x579.jpg'},
      {'id':3,'url':'http://i8.m.vancl.com/wap/2017_6_29_17_24_33_8706_320x579.jpg'},
      {'id':2,'url':'http://i2.m.vancl.com/wap/2017_6_22_18_27_45_2323_320x579.jpg'},
      {'id':1,'url':'http://i3.m.vancl.com/wap/2017_6_22_18_29_0_3889_320x579.jpg'}
    ],
    'recommend':[
      {'id':1,'url':'http://p1.vanclimg.com/product/6/3/7/6375963/mid/6375963-1j201703071038403242.jpg','proName':'T恤'},
      {'id':2,'url':'http://p4.vanclimg.com/product/6/3/7/6375718/mid/6375718-1j201704171547271221.jpg','proName':'短袖衬衫'},
      {'id':3,'url':'http://p1.vanclimg.com/product/6/3/7/6375765/mid/6375765-1j201704141534436636.jpg','proName':'POLO'},
      {'id':4,'url':'http://p4.vanclimg.com/product/6/3/7/6375466/mid/6375466-1j201703291442422570.jpg','proName':'吉国武'},
      {'id':1,'url':'http://p4.vanclimg.com/product/6/3/7/6375687/mid/6375687-1j201702161003008614.jpg','proName':'牛津纺'},
      {'id':2,'url':'http://p1.vanclimg.com/product/6/3/7/6373889/mid/6373889-1j201608231038149149.jpg','proName':'水柔棉'},
      {'id':3,'url':'http://p4.vanclimg.com/product/6/3/7/6374309/mid/6374309-1j201608231152539580.jpg','proName':'休闲衬衫'},
      {'id':4,'url':'http://p4.vanclimg.com/product/6/3/7/6375920/mid/6375920-1j201704071346168501.jpg','proName':'皮肤衣'},
      {'id':1,'url':'http://p4.vanclimg.com/product/6/3/7/6375709/mid/6375709-1j201702221652020476.jpg','proName':'卫衣'},
      {'id':2,'url':'http://p4.vanclimg.com/product/6/3/7/6377126/mid/6377126-1j201705091105231061.jpg','proName':'童装'},
      {'id':3,'url':'http://p5.vanclimg.com/product/6/3/7/6375237/mid/6375237-1j201609181106554831.jpg','proName':'休闲裤'},
      {'id':4,'url':'http://p3.vanclimg.com/product/6/3/7/6375663/mid/6375663-1201702221659421316.jpg','proName':'牛仔裤'},
      {'id':3,'url':'http://p4.vanclimg.com/product/6/3/7/6375759/mid/6375759-1j201704131120322963.jpg','proName':'沙滩裤'},
      {'id':2,'url':'http://p5.vanclimg.com/product/6/3/7/6375881/mid/6375881-1j201702281503335949.jpg','proName':'帆布鞋'},
      {'id':4,'url':'http://p1.vanclimg.com/product/6/3/7/6375869/mid/6375869-1j201703301445582286.jpg','proName':'复古跑'}
    ],
    'customlist':[
      {'id':1,'url':'http://i2.m.vancl.com/q80/wap/2017_5_26_14_8_36_748.jpg'},
      {'id':2,'url':'http://i2.m.vancl.com/q80/wap/2017_5_26_14_8_55_8875.jpg'},
      {'id':3,'url':'http://i1.m.vancl.com/q80/wap/2017_6_30_20_29_41_7683.jpg'},
      {'id':4,'url':'http://i3.m.vancl.com/q80/wap/2017_6_30_20_30_2_5222.jpg'},
      {'id':1,'url':'http://i3.m.vancl.com/q80/wap/2017_6_30_20_31_22_3397.jpg'},
      {'id':2,'url':'http://i6.m.vancl.com/q80/wap/2017_6_30_20_30_46_6263.jpg'},
      {'id':3,'url':'http://i7.m.vancl.com/q80/wap/2017_6_30_20_31_41_9314.jpg'},
      {'id':4,'url':'http://i2.m.vancl.com/q80/wap/2017_6_30_20_31_58_633.jpg'},
      {'id':1,'url':'http://i1.m.vancl.com/q80/wap/2017_6_30_20_32_12_9485.jpg'},
      {'id':2,'url':'http://i1.m.vancl.com/q80/wap/2017_6_30_20_32_34_7588.jpg'}
    ],
    'details':[
      {
        'id':1,
        'url1':'http://i.vanclimg.com/640/q80/product/6/3/7/6375986/big/6375986-1j201703081614368562.jpg',
        'url2':'http://i.vanclimg.com/640/q80/product/6/3/7/6375986/big/6375986-2201703081614368562.jpg',
        'name':'凡客T恤 十二生肖 蛇 白色',
        'price':'98'
      },
      {
        'id':2,
        'url1':'http://i.vanclimg.com/640/q80/product/6/3/7/6374862/big/6374862-1j201605240949159923.jpg',
        'url2':'http://i.vanclimg.com/640/q80/product/6/3/7/6374862/big/6374862-5201605240949159923.jpg',
        'name':'凡客帆布鞋 女款 橘色',
        'price':'198'
      },
      {
        'id':3,
        'url1':'http://i.vanclimg.com/640/q80/product/6/3/7/6373888/big/6373888-1j201608231038151804.jpg',
        'url2':'http://i.vanclimg.com/640/q80/product/6/3/7/6373888/big/6373888-2201608231038151804.jpg',
        'name':'凡客T恤 水柔棉 短袖圆领 男款 黑色',
        'price':'168'
      },
      {
        'id':4,
        'url1':'http://i.vanclimg.com/640/q80/product/6/3/7/6375667/big/6375667-1j201702221659471941.jpg',
        'url2':'http://i.vanclimg.com/640/q80/product/6/3/7/6375667/big/6375667-03201702221659421316.jpg',
        'name':'牛仔 前开叉长裙 女款 蓝水牛',
        'price':'358'
      }
    ]
  })
})
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
