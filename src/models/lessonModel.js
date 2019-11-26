var mongoose = require('mongoose');

var lessonSchema = mongoose.Schema({
    title: String,
    description: String,
    file: String,
    duration: String
});

var Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;