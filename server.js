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
  '/app/*': '/$1',
  '/blog/:resource/:id/show': '/:resource/:id'
}))

server.post('/login', (req, res) => {
	var data = Mock.mock(db.login)
	var json = JSON.stringify(data, null, 4)
	// console.log('-----------------\n' + json)
	res.send(json)
})
server.get('/user/act/myApplyList', (req, res) => {
	var data = Mock.mock(db.applyList)
	var json = JSON.stringify(data, null, 4)
	// console.log('-----------------\n' + json)
	res.send(json)
})
server.get('/user/act/myDoneList', (req, res) => {
	var data = Mock.mock(db.doneList)
	var json = JSON.stringify(data, null, 4)
	// console.log('-----------------\n' + json)
	res.send(json)
})
server.get('/user/act/myUpcoming', (req, res) => {
	var data = Mock.mock(db.todoList)
	var json = JSON.stringify(data, null, 4)
	// console.log('-----------------\n' + json)
	res.send(json)
})
server.get('/act/filetransfer/info/:id', (req, res) => {
	var data = Mock.mock(db.filetransferInfo)
	var json = JSON.stringify(data, null, 4)
	// console.log('-----------------\n' + json)
	res.send(json)
})


server.listen(3000, () => {
  console.log('JSON Server is running')
})