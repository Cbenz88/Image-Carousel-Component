const server = require('./server.js');
const port = process.env.PORT || 3014;

server.client.on('connect', function() {
    console.log('Redis client connected');
});

server.client.on('error', function (err) {
    console.log('Issue connecting to Redis' + err);
});

server.app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
