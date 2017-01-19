const express = require("express");
const route = express.Router();

module.exports = function(db) {
  // GET api/v1/topics
  route.get("/", get);

  function get(req, res, next) {

    res.json({data: [ "motivation", "study tips", "have a laugh" ]});}

  return route;

}
//   db.find('topics')
//      .then((topics) => {
//       res.json({data: topics})
//
//      })
//
