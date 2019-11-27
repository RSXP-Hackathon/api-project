var mongoose = require('mongoose');

var companySchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    website: String,
    avatar: String
});

var Company = mongoose.model("Company", companySchema);

module.exports = Company;