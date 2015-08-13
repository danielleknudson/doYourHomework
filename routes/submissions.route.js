var express           = require('express');
var request           = require('request');
var Promise           = require('bluebird');
var bodyParser        = require('body-parser'); // parses HTTP request body 
var submissionsRouter = express.Router();
var endpoint          = 'https://api.edmodo.com/assignment_submissions?assignment_creator_id=73240721&access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d';
submissionsRouter.get('/', function (req, res) {
  if (req.query.assignment_id) {
    endpoint += '&assignment_id=' + req.query.assignment_id;
  }
  request(endpoint, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.status(200).send(body);
    }
  });
});
module.exports = submissionsRouter;