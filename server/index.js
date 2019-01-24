const app = require('./server.js');
const client = require('./server.js')
const port = process.env.PORT || 3014;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});