const app = require('./server.js');
const client = require('./server.js');
const port = process.env.PORT || 3014;

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Issue connecting to Redis' + err);
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
