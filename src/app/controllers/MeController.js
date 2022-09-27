const Course = require('../models/Course');
const {mongoosesToObject} = require('../../util/mongoose.js');

class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: mongoosesToObject(courses),
                });
            })
            .catch(next);
    }
    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/trash-courses', {
                    courses: mongoosesToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
