var app = require('./server.js');
var port = process.env.PORT || 3014;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

// app.client.on('connect', function() {
//     console.log('Redis client connected');
// });

// app.client.on('error', function (err) {
//     console.log('Something went wrong ' + err);
// });