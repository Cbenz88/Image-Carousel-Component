const mysql = require('../db/index.js');
const Listing = require('./Models.js');
const request = require('superagent');
const client = require('../server.js');

module.exports.cache = function(req, res, next) {
    var listingNumber = req.params.number;
    server.client.get(listingNumber, function (err, data) {
        if (data != null) {
            res.send(respond(listingNumber, data));
        } else {
            next();
        }
    });
}

module.exports.retrieveOne = function(req, res) {
    var listingNumber = req.params.number;
    Listing.findOne({where: {id: listingNumber}})
    .then((listing) => {
        client.setex(listingNumber, 6000, listing)
        res.send(listing);
    })
    .catch((err) => {
        console.log('Error in retrieveOne controller: ', err);
        res.sendStatus(500);
    })
};