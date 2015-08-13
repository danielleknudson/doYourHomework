var express           = require('express');
var request           = require('request');
var Promise           = require('bluebird');
var assignmentsRouter = express.Router();
var endpoint          = 'https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d';
assignmentsRouter.get('/', function (req, res) {
  request(endpoint, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.status(200).send(body);
    }
  });
});
module.exports = assignmentsRouter;