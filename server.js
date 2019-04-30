// deklaruję zmienną w któej będe przechowywać funkcjonalność Expressa
var express = require('express');

// delkaruję aplikację express
var app = express();

// co ma się stać po odebraniu GET
app.get('/', function(req, res) {
    res.send('Hello world');
});

// inicjuję server nasłuchujący dla aplikacji
var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});

