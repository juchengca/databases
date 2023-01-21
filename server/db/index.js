//var mysql = require('mysql2');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

var db = new Sequelize('chat', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

// var con = mysql.createConnection({
//   user: 'root',
//   password: ''
// });

// con.connect(function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected!');
// });







module.exports.db;