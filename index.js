var express = require('express');
//var appRouter = express.Router();
var app = express();

// middleware that is specific to this router
/*appRouter.use(function(req, res, next){
	console.log('Time: ',Date.now());
	next();
});*/

app.use(express.static('app'));

/*app.get('/', function(req, res){
	res.send('Hello Welcome');
});*/

app.listen(3000, function(){
	console.log('listen on port 3000');
});