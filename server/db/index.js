var mysql = require("mysql");
var mysqlConfig = {
  host: process.env.SQL_HOSTNAME || 'localhost',
  user: process.env.SQL_USERNAME || 'root',
  password: process.env.SQL_PASSWORD || '',
  database: process.env.SQL_DATABASE ||  'thedb'
};

var connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Successfully connected to database.");

});

module.exports = connection;