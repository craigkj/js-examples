var express = require('express');
var app = express();
var routes = require('./routes');

var serverSetup = {
    port: 7080
};

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(routes);

app.listen(serverSetup.port);
console.log('Recipes running on: ' + serverSetup.port);
