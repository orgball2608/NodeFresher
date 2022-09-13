//import models
const Course = require("../models/Course");
//import object transform
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  //GET /
  index(req, res) {
    Course.find({})
      .then((courses) => {
        courses = multipleMongooseToObject(courses);
        res.render("home", { courses });
      })
      .catch((err) => next(err));
  }

  //GET /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
