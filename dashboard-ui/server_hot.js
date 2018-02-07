var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
    stats: {
        colors: true
    },
    port: 8088,
    setup: function (app) {

    },
    proxy: {
        '/dashboard/*': {
            target: "http://localhost:8080",
            changeOrigin: true
        }
    }
});

server.listen(8088, function () {
    console.log('8088');
})