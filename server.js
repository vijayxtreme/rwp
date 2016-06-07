var express = require('express'),
	app = express(),
	path = require('path'),
	bodyParser = require('body-parser');

app.use(express.static('public'));

app.get('/list', function(req, res){
	res.sendFile(path.join(__dirname + '/public/list.html'));
})

app.post('/list', function(req, res){
	res.sendFile(path.join(__dirname + '/public/list.html'));
})

app.listen(process.env.PORT || 3000, function(){
	console.log('connected');
})