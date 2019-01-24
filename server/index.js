const app = require('./server.js').app;
const client = require('./server.js').client;
const port = process.env.PORT || 3014;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Issue connecting to Redis' + err);
});