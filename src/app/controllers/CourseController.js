const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose.js');

class CourseController {
    create(req, res, next) {
        res.render('courses/create');
    }

    //[post] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((error) => {});
    }

    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then((course) =>
                res.render('courses/show', {course: mongooseToObject(course)})
            )
            .catch(next);
    }

    //[put] /courses/:id
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {course: mongooseToObject(course)})
            )
            .catch(next);
    }

    //[put] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[delete] /courses/:id
    destroy(req, res, next) {
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[delete] /courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
