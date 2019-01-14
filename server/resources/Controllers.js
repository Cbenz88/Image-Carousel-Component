var Listing = require('./Models.js');

module.exports.retrieveOne = (req, res) => {
    const id = req.params.number;
    // console.log(id)
    // Listing.findById(id)
    //   .exec((err, data) => {
    //     if (err) {
    //       res.send(err);
    //       console.log(err)
    //     } else if (data) {
    //       res.send(data);
    //       console.log(data)
    //     }
    //   });
    Listing.find({ _id: id}, (err, data) => {
        if (err) {
            res.send(err);
            console.log('response err', err)
        } else if (data) {
            res.send(data[0]);
            console.log(data)
        }
    })
}