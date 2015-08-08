var mongoose = require("mongoose");

var EntriesSchema = new mongoose.Schema({
    //key : data type
    name : String,
    message : String
});

module.exports = mongoose.model("entries", EntriesSchema);