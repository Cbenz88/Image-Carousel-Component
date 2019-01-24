var express = require('express');
var Router = express.Router();
var Controller = require('./Controllers.js');

Router.get('/:number',Controller.cache ,Controller.retrieveOne);

module.exports = Router;