const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db'); //runs ./db. do not delete.
const Router = require('./resources/Routers.js');
const path = require('path');
const cors = require('cors');
const compression = require('compression');



// Create the Express application:
const app = express();

// Attach middleware:
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use('/:number', express.static(path.join(__dirname, '../react-client/dist')));
app.use('/', express.static(path.join(__dirname, '../react-client/dist')));
app.use(morgan('dev'));
app.use('/api/images', Router);

module.exports = app;