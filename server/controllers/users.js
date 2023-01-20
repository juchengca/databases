var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    models.users.create(req.body.username);
    //console.log(req.body);
    res.end();
  }
};
