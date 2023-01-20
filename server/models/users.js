var db = require('../db');
var mysql = require('mysql2');

module.exports = {
  getAll: function () {},
  create: function (user) {

    var con = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'chat'
    });

    con.connect(function(err) {
      if (err) {
        throw err;
      } else {
        console.log('Connected!');
        var sql = `INSERT INTO users (username) VALUES ("${user}")`;
        con.query(sql, function (err, result) {
          if (err) {
            throw err;
          } else {
            console.log('1 user inserted');
          }
        });
      }
    });
  }
};
