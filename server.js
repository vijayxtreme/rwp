var express = require('express'),
	app = express();
var path = require('path');

app.use(express.static('public'));

app.post('/list', function(req, res){
	res.sendFile(path.join(__dirname + '/public/list.html'));
})

app.listen(process.env.PORT || 3000, function(){
	console.log('connected');
})