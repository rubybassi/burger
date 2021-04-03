const mysql = require("mysql");
require('dotenv').config();

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_localhost,
    port: process.env.DB_PORT,
    user: process.env.DB_username,
    password: process.env.DB_password,
    database: process.env.DB_name
  });
}

connection.connect();
module.exports = connection;