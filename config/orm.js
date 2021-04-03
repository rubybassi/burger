const connection = require("./connection");

const orm = {
  selectAll: (callback) => {
    const queryString = "SELECT * FROM burgers";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  },

  insertOne: (burger_name, callback) => {
    const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [burger_name], function (err, results) {
      if (err) throw err;
      callback(results);
    });
  },

  updateOne: (id, callback) => {
    const queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString, [id], (err, results) => {
      if (err) throw err;
      callback(results);
    });
  },
};

module.exports = orm;
