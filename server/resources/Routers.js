var express = require('express');
var Router = express.Router();
var Controller = require('./ControllersSQL.js');

Router.get('/:number', Controller.retrieveOne);

module.exports = Router;