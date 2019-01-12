const url = "mongodb://localhost:27017/";
const mongoose = require('mongoose');

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;