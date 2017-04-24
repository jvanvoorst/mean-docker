var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './views'});
});

var port = 3000;
app.listen(port, function() {
    console.log('Server running on port ' + port);
});
