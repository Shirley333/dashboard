function initialize(app) {
    app.get('/', function (req, res) {
        res.render('index.html');
    });
}

exports.initialize = initialize;