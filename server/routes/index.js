/**
 * Created by danesmith on 11/3/15.
 */
var express = require('express');
var router = express.Router();

var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/chembros');

mongoose.model('Employee', new Schema({"gender": String, "salary": Number, "years": Number, "name": String,
        "title": String, "rank": Number },
    {collection: 'employees'}));

var Employee = mongoose.model('Employee');

router.get('/data', function(req, res){
    //handle populating ajax
});

router.post('/data', function(req, res){
    //handle promoting ajax
});

router.delete('/data', function(req, res){
    //handle delete ajax
});


router.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;