'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// cargar rutas
var user_routes = require('./routes/user');
var service_routes = require('./routes/service');
var category_routes = require('./routes/category');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras http

// rutas base
app.use('/api', user_routes);
app.use('/api', service_routes);
app.use('/api', category_routes);

module.exports = app;