/**
 * Created by danesmith on 11/3/15.
 */
var express = require('express');
var router = express.Router();

var path = require('path');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/chembros');


mongoose.model('Employee', new Schema({"gender": String, "salary": Number, "years": Number, "name": String,
        "title": String, "rank": Number },
    {collection: 'employees'}));

var Employee = mongoose.model('Employee');

router.get('/data', function(req, res) {

    Employee.find({}, function (err, data) {
        if (err) console.log(err);
        res.send(data);
    });
});

router.post('/data', function(req, res){
    Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, function (err, tank) {
        if (err) return handleError(err);
        res.send(tank);
    });
    //handle promoting ajax
    res.send('post route accessed');
});

router.delete('/data', function(req, res){
    //console.log(req);

    Employee.findByIdAndRemove({"_id" : req.body.id}, function(err, data) {
        if (err) console.log(err);
        res.send('deleted key :', data);
    });

    //res.send('deleted key :');
});


router.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;