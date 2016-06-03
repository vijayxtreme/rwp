var express = require('express'),
	app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function(){
	console.log('connected');
})