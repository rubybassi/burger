const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_localhost,
  port: process.env.DB_PORT,
  user: process.env.DB_username,
  password: process.env.DB_password,
  database: process.env.DB_name
});

connection.connect(function(err) {
  if (err) console.log('whoops error', err);
  else console.log("connected as id ", connection.threadId);
});

module.exports = connection;