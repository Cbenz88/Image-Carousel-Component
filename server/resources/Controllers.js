const mysql = require('../db/index.js');
const Listing = require('./Models.js');
const request = require('superagent');
const redis = require('redis');
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_HOST = process.env.REDIS_HOST;
const client = redis.createClient(REDIS_PORT, REDIS_HOST);

module.exports.cache = function (req, res, next) {
    var listingNumber = req.params.number;
    client.on('connect', function () {
        console.log('Redis client connected');
    });
    client.on('error', function (err) {
        console.log('Something went wrong ' + err);
    });
    client.get(listingNumber, function (err, data) {
        if (data != null) {
            res.send(Number(listingNumber), data);
        } else {
            next();
        }
    });
}

module.exports.retrieveOne = function (req, res) {
    var listingNumber = req.params.number;
    Listing.findOne({
            where: {
                id: listingNumber
            }
        })
        .then((listing) => {
            client.setex(listingNumber, 6000, JSON.stringify(listing))
            res.send(listing);
        })
        .catch((err) => {
            console.log('Error in retrieveOne controller: ', err);
            res.sendStatus(500);
        })
};