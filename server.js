require("babel-register");
const jsonServer = require('json-server')
const server = jsonServer.create()
// const router = jsonServer.router('db.json') //默认为当前目录
//const path = require('path') 指定其他目录
//const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const Mock = require('mockjs')
const db = require('./db.js').default

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  console.log('--------------'+req.method)
  if (req.method === 'POST') {
    console.log(req.body)
    req.body.createdAt = Date.now()
	  req.body.test = 1
  }
  // Continue to JSON Server router
  next()
})
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/blog/:resource/:id/show': '/:resource/:id'
}))

server.get('/echo', (req, res) => {
	var data = Mock.mock(db.echo)
	var json = JSON.stringify(data, null, 4)
	// console.log('-----------------\n' + json)
	res.send(json)
})
server.get('/mmp', (req, res) => {
	var data = Mock.mock(db.mmp)
	var json = JSON.stringify(data, null, 4)
	// console.log('-----------------\n' + json)
	res.send(json)
})
server.post('/save', (req, res) => {
	var data = Mock.mock(db.save)
	var json = JSON.stringify(data, null, 4)
	// console.log('-----------------\n' + json)
	res.send(json)
})

// router.render = (req, res) => {
//   res.jsonp({
//     body: res.locals.data
//   })
// }
// server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})