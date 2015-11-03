/**
 * Created by danesmith on 11/3/15.
 */
var express = require('express');
var router = express.router();

var path = require('path');
var bodyParser = require('body-parser');


app.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});