var db = require('../db');
var mysql = require('mysql2');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function (body) {

    console.log(body);

    var username = body.username;
    var text = body.message;
    var roomname = body.roomname;

    var con = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'chat'
    });

    con.connect(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected!');
        var sql = `INSERT INTO messages (username, text, roomname) VALUES ("${username}", "${text}","${roomname}")`;
        con.query(sql, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log(result,'message result');
            console.log('1 message inserted');
          }
        });
      }
    });
  }
};
