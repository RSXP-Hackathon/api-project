var mongoose = require('mongoose');

var moduleSchema = mongoose.Schema({
    title: String,
    description: String
});

var Module = mongoose.model("Module", moduleSchema);

module.exports = Module;