const express = require('express')
const router = express.Router()


const App = express()

App.use('/static', express.static(__dirname + '/public'))


App.set('views', __dirname +'/views')

App.set('view engine', 'pug')

App.get('*', function(req, res){
	res.render('index')
})

App.listen(process.env.PORT || 3000, () =>{
	console.log('listening to port 3000')
})