var models = require('../models');

module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages
  post: function (req, res) {

    models.messages.create(req.body);
    res.end();
  } // a function which handles posting a message to the database
};
