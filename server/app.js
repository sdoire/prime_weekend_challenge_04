var express = require("express");
var path = require("path");
var mongoose = require("mongoose");

var app = express();

var messages = require('./routes/messages');
var index = require('./routes/index');

var mongoURI = "mongodb://sarah:sherlock@ds031223.mongolab.com:31223/messages";
//var mongoURI = "mongodb://localhost:27017/messages";
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
    if(err){
        console.log("MONGO ERROR: ", err);
    }
});

mongoDB.once('open', function(){
    console.log("CONNECTED TO MONGODB!");
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));

app.set("port", (process.env.PORT || 5000));


app.use("/messages", messages);
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});