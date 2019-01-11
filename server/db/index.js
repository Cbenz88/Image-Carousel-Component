var mysql = require("mysql");
var mysqlConfig = {
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || '',
  database: 'thedb'
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