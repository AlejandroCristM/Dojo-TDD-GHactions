const express = require("express");
const app = express();
const cal = require('./calculator');

app.get("/add", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: cal.add(a, b),
        intentos: "0"
    });
});

app.get("/subtract", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: cal.substract(a, b),
        intentos: "0"
    });
});

//exports app module
module.exports = app;