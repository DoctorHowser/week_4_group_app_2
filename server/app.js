/**
 * Created by danesmith on 11/3/15.
 */
var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/chembros');

mongoose.model('Employee', new Schema({"gender": String, "salary": Number, "years": Number, "name": String, "title": String, "rank":Number }, {collection: 'employees'}));

var Employee = mongoose.model('Employee');

app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"), function(){
    console.log("listening on port: ", app.get("port"));
});



