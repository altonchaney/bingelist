// from https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode

var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/html', express.static(__dirname + '/html'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/list', express.static(__dirname + '/list'));
app.use('/img', express.static(__dirname + '/img'));

app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('html/index.html', { root: __dirname });
});

app.listen(3006); //the port you want to use

