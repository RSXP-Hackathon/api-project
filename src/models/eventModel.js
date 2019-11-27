var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    title: String,
    date: Date,
    mentor_id: String,
    company_id: String,
    city: String,
    uf: String,
    place: String
});

var Event = mongoose.model("Event", eventSchema);

module.exports = Event;