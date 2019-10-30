const routes = require('express').Router();
const bodyParser = require('body-parser');
const cors = require('cors')

// Define endpoints/routes in separate files
const bookmarks = require('./bookmarks');
const github = require('./github');

// configure app to use bodyParser()
// this is required to let us get the data from a POST
routes.use(bodyParser.urlencoded({
    extended: true
}));
routes.use(bodyParser.json());

routes.use(cors());

// General logging of the incoming request, for development purposes
routes.use((req, res, next) => {
    console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
    next();
});

// define basic route
routes.get('', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Coding Challenge'
    });
})

// Apply and use defined endpoints
routes.use(bookmarks);
routes.use(github);

module.exports = routes;