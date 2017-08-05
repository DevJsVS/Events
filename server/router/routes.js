const auth = require('../controllers/AuthController');

function routes(app) {
    app.use('/auth', auth);
}

module.exports = routes;
