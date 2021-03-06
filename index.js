const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({extended: false}));

//routes
require('./server/router/routes')(app);


// start the server
app.listen(3000, () => {
    console.info('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});