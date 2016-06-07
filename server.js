var express = require('express'),
	app = express();

app.use(express.static('public'));

app.post('/list', function(req, res){
	res.sendFile(path.join(__dirname + '/list.html'));
})

app.listen(process.env.PORT || 3000, function(){
	console.log('connected');
})