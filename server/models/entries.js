var mongoose = require("mongoose");

var EntriesSchema = new mongoose.Schema({
    //key : data type
    name : String,
    message : String,
    created : { type : Date, default: Date.now }

});

module.exports = mongoose.model("entries", EntriesSchema);