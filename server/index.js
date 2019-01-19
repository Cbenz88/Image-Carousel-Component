var app = require('./server.js');
var port = process.env.PORT || 3014;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
