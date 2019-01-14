const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    _id: {type: Number, unique: true},
    image1Url: String,
    image2Url: String,
    image3Url: String,
    image4Url: String,
    image5Url: String,
    image6Url: String,
    videoUrl: String
});

const Listing = mongoose.model('images', listingSchema);

module.exports = Listing;