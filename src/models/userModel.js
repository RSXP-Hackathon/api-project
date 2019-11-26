var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    city: String,
    uf: String,
    avatar: String
 });

 var User = mongoose.model("User", userSchema);

 module.exports = User;