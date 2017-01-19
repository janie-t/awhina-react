const express = require("express");
const route = express.Router();

module.exports = function(db) {
  // GET api/v1/topics
  route.get("/", get);

  function get(req, res, next) {

    res.json({data: [ "Motivation", "Study tips", "Have a laugh", "Emotions", "Fitness", "Feeling down", "Bullying", "Drugs & alcohol", "Peer pressure", "Online safety" ] });
  }
  return route;
};
//   db.find('topics')
//      .then((topics) => {
//       res.json({data: topics})
//
//      })
//

