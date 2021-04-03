const orm = require("../config/orm");

const burger = {
  selectAll: (callback) => {
    orm.selectAll((res) => {
      callback(res);
    });
  },
  insertOne: (burger, callback) => {
    orm.insertOne(burger, (res) => {
      callback(res);
    });
  },
  updateOne: (id, callback) => {
    orm.updateOne([id], (res) => {
      callback(res);
    });
  },
};

module.exports = burger;
