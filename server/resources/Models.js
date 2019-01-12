const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    image1Url: String,
    image2Url: String,
    image3Url: String,
    image4Url: String,
    image5Url: String,
    image6Url: String,
    videoUrl: String
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;