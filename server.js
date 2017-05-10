const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')


let messageServerStorage = []

const App = express()

App.use('/static', express.static(__dirname + '/public'))

App.use(bodyParser());

App.set('views', __dirname +'/views')

App.set('view engine', 'pug')

App.get('/messages', function(req, res) {
	res.send({messageServerStorage})
})

App.post('/message', function (req, res) {
	console.log(req.data)
	messageServerStorage.push(req.body)
	res.send({status:'200'})
})

App.get('/obj', function(req, res){
	res.send({name: 'Jaw'})
})

App.get('*', function(req, res){
	res.render('index')
})

App.listen(process.env.PORT || 3000, () =>{
	console.log('listening to port 3000')
})