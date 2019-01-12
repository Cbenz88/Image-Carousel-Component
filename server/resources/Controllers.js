var mysql = require('../db/index.js');
var Listing = require('./Models.js');

module.exports.retrieveOne = function(req, res) {
    var listingNumber = req.params.number;
    
    Listing.find({number: listingNumber}, (err, data) => {
        if (err) {
          console.log('Error getting listing', err);
        } else {
          res.send(data);
        }
      });
    };