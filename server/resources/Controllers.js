var mysql = require('../db/index.js');
var Listing = require('./Models.js');

module.exports.retrieveOne = function(req, res) {
    var listingNumber = req.params.number;
    Listing.findOne({where: {id: listingNumber}})
    .then((listing) => {
        res.send(listing);
    })
    .catch((err) => {
        console.log('Error in retrieveOne controller: ', err);
        res.sendStatus(500);
    })
};