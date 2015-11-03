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

var tempEmployee = {"gender" : "female", "salary": 50000, "years" : 2, "name" :"Dana", "title" : "Dev", "rank": 2};

router.get('/data', function(req, res){

    //Employee.find({}, function(err , data){
    //    if(err) console.log(err);
    //    res.send(data);
    res.send(tempEmployee);
});

router.post('/data', function(req, res){
    //handle promoting ajax
    res.send('post route accessed');
});

router.delete('/data', function(req, res){
    //Employee.FindByIdAndDelete({"_id", : req.body.something}, function(err, data){
    //if(err) console.log(err);
    //res.send(data);
    res.send('delete route accessed');
});


router.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;