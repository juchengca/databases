//var db = require('../db');
// var mysql = require('mysql2');
var Sequelize = require('sequelize');

module.exports = {
  getAll: function (callback) {

    var db = new Sequelize('chat', 'root', '', {
      dialect: 'mysql',
      host: 'localhost',
    });

    var Messages = db.define('messages', {
      username: Sequelize.STRING,
      text: Sequelize.STRING,
      roomname: Sequelize.STRING,
    });

    // var getAllMessages = async () => {
    //   try {
    //   var messageAll = await Messages.findAll();
    //   return messageAll;
    //   } catch(err) {
    //     console.log(err);
    //   }
    // }
    // // console.log(Promise.resolve(getAllMessages()).then(data)=>{JSON.stringify(data)})

    // /*
    // getAllMessages().then((data) => { callback(JSON.stringify(data))
    //   */

    Messages.sync().then(function() {
      // Retrieve objects from the database:
      return Messages.findAll();
    }).then((messages) => {
      callback(JSON.stringify(messages));
    }).catch(function(err) {
      // Handle any error in the chain
      console.error(err);
      db.close();
    });

    // var sql = 'SELECT * FROM messages';

    // db.query(sql, (err, results) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       //console.log('results: models ', results);
    //       callback(JSON.stringify(results));
    //     }
    //   });

    // var con = mysql.createConnection({
    //   user: 'root',
    //   password: '',
    //   database: 'chat'
    // });

    // var sql = 'SELECT * FROM messages';

    // con.query(sql, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     //console.log('results: models ', results);
    //     callback(JSON.stringify(results));
    //   }
    // });

  }, // a function which produces all the messages

  create: function (body, callback) {

    var username = body.username;
    var text = body.message;
    var roomname = body.roomname;

    var db = new Sequelize('chat', 'root', '', {
      dialect: 'mysql',
      host: 'localhost',
    });

    var Messages = db.define('messages', {
      username: Sequelize.STRING,
      text: Sequelize.STRING,
      roomname: Sequelize.STRING,
    });

    Messages.sync()
      .then(function() {
      // Now instantiate an object and save it:
        Messages.create({username: username, text: text, roomname: roomname});
        setTimeout( () => { callback(); }, '2500');
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
        console.log(err);
      } else {
        console.log('Connected!');
        var sql = `INSERT INTO messages (username, text, roomname) VALUES ("${username}", "${text}","${roomname}")`;
        con.query(sql, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log('1 message inserted');
            callback();
          }
        });
      }
    });

    */

  }
};
