var express = require('express');
var router = express.Router();
var path = require('path');
var People = require('../models/entries');

router.post("/", function(req, res, next) {
    People.create(req.body, function (err, post) {
        res.send("yes");
    });
});

router.delete("/:id", function(req, res, next){
    People.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err){
            console.log("ERROR!! : ", err);
        }
        res.json(post);
    });
});

router.get("/", function(req, res, next){
    People.find(function(err, entries){
        res.json(entries);
    });
});


module.exports = router;