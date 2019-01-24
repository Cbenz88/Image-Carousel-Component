const app = require('./server.js');
const port = process.env.PORT || 3014;
const redis = require('redis');
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_HOST = process.env.REDIS_HOST;
module.exports.client = redis.createClient(REDIS_PORT, REDIS_HOST);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});
