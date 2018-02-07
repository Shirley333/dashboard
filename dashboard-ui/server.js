// var path = require('path');
// var express = require('express');
// var webpack = require('webpack');
// var config = require('./webpack.config');
//
// var app = express();
// var compiler = webpack(config);
//
// app.use(express.static(path.join(__dirname, '/')))
// //use in webpack development mode
// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));
// app.use(require('webpack-hot-middleware')(compiler));
//
// //use in webpack production mode
// //app.use(express.static(__dirname));
//
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
//
// app.listen(8080, 'localhost', function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     console.log('Listening at http://localhost:8080');
// });

var http = require('http');
var url = require('url');
var express = require('express');
var consolidate = require('consolidate');
var handlebars = require('handlebars');
var bodyParser = require('body-parser');

var app = express();
var routes = require('./routes');

app.set('views', 'views');
app.set('view engine', 'html');
app.engine('html', consolidate.handlebars);
app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({extends: true}));
var port = process.argv[2] || 8000;

http.createServer(app).listen(port, function () {
    routes.initialize(app);
})
