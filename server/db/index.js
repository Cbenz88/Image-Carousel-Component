const url = "mongodb://localhost/listings";
const mongoose = require('mongoose');

mongoose.connect(url, (err) => {
  if(err) {
    console.log('Error connecting to DB')
  }
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  'Connected to DB'
});

module.exports = db;