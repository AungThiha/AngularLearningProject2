var express = require('express');
var path = require('path');

var app = module.exports = express();

var port = process.env.PORT || 8080; 

app.use(express.static(__dirname + '/public')); 
app.use(require('prerender-node').set('prerenderToken', 'YOUR-TOKEN-HERE')); 

// This will ensure that all routing is handed over to AngularJS 
app.get('/humans.txt', function(req, res){ 
  res.sendFile(path.resolve('./humans.txt')); 
});

app.get('*', function(req, res){ 
  res.sendFile(path.resolve('./public/index.html')); 
});

app.listen(port); 