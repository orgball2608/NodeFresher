const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

// Tạo lược đồ Course
const Course = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        image: {type: String},
        slug: {type: String, slug: 'name', unique: true},
        videoId: {type: String, required: true},
        level: {type: String},
    },
    {timestamps: true}
);

Course.plugin(mongooseDelete, {overrideMethods: 'all', deletedAt: true});

// Tạo model Course
const courseModel = mongoose.model('Course', Course);

module.exports = courseModel;
