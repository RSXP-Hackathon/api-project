var mongoose = require('mongoose');

var mentorSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    avatar: String,
    city: String,
    uf: String,
    bio: String,
    speciality: String
});

var Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;