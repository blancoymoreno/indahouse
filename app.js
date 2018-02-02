'use strict'
const cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

var app = express();
// cargar rutas
var user_routes = require('./src/routes/user');
var category_routes = require('./src/routes/category');
var service_routes = require('./src/routes/service');
var valoracion_routes = require('./src/routes/valoracion');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

// configurar engine views
app.use(express.static(path.join(__dirname,'dist')));

// rutas base
app.use('/api', user_routes);
app.use('/api', category_routes);
app.use('/api', service_routes);
app.use('/api', valoracion_routes);

module.exports = app;