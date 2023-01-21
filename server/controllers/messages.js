var models = require('../models');

module.exports = {
  get: function (req, res) {

    models.messages.getAll((results) => {
      res.end(results);
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {

    models.messages.create(req.body, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.end();
      }
    });
  } // a function which handles posting a message to the database
};
