// var db = require('../db');
// var mysql = require('mysql2');
var Sequelize = require('sequelize');

module.exports = {
  getAll: function () {},
  create: function (user, callback) {

    var db = new Sequelize('chat', 'root', '', {
      dialect: 'mysql',
      host: 'localhost',
    });

    var User = db.define('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: Sequelize.STRING,
    });

    User.sync()
      .then(function() {
      // Now instantiate an object and save it:

        User.create({username: user});
        callback();
      })
      .catch(function(err) {
        // Handle any error in the chain
        console.error(err);
        callback();
        db.close();
      });

    /*
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
            callback();
          }
        });
      }
    });

    */
  }
};
