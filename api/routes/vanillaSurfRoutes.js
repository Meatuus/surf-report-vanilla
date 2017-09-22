'use strict';

module.exports = function(app) {
  var request = require('request');
  // var vanillaSurf = require('../controllers/vanillaSurfController');

  const locationOneUrl = 'http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=698';
  const locationOne = "Ballina";
  const locationTwoUrl = 'http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=541';
  const locationTwo = "Byron Bay";
  const locationThreeUrl = 'http://magicseaweed.com/api/f03a395d88e9766e7ba7b625c73cc794/forecast/?spot_id=1036';
  const locationThree = "Shelly Beach";

  // location Routes
  app.get('/locationOne', (req, res) => (
    request(locationOneUrl, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body)
        res.send(info);
      }
    })
  ))

  app.get('/locationTwo', (req, res) => (
    request(locationTwoUrl, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body)
        res.send(info);
      }
    })
  ))

  app.get('/locationThree', (req, res) => (
    request(locationThreeUrl, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body)
        res.send(info);
      }
    })
  ))

  // app.get('/api/shellybeach', (req, res) => (
  //   request(locationThreeUrl, (error, response, body) => {
  //     if (!error && response.statusCode == 200) {
  //       var info = JSON.parse(body)
  //       res.send(info);
  //     }
  //   })
  // ))

  // app.route('/tasks')
  //   .get(vanillaSurf.list_all_tasks)
  //   .post(vanillaSurf.create_a_task);
  //
  //
  // app.route('/tasks/:taskId')
  //   .get(vanillaSurf.read_a_task)
  //   .put(vanillaSurf.update_a_task)
  //   .delete(vanillaSurf.delete_a_task);
};
