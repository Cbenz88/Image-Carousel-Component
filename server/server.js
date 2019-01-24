const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db'); //runs ./db. do not delete.
const Router = require('./resources/Routers.js');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const redis = require('redis');
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_HOST = process.env.REDIS_HOST;

const app = express();
const client = redis.createClient(REDIS_PORT, REDIS_HOST);

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../react-client/dist')));
app.use('/:number', express.static(path.join(__dirname, '../react-client/dist')));
app.use(morgan('dev'));
app.use('/api/images', Router);

module.exports = app;
