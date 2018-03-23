'use strict'
const cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

var app = express();
// cargar rutas
var user_routes = require('./routes/user');
var category_routes = require('./routes/category');
var service_routes = require('./routes/service');
var valoracion_routes = require('./routes/valoracion');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

// configurar engine views
app.use(express.static(path.join(__dirname,'dist')));

// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow_Origin', '*');
    res.header('Access-Control-Allow_Headers', 'Authorization, X-API-KEY, Origin, X-Requested_Width, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow_Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});
// rutas base
app.use('/api', user_routes);
app.use('/api', category_routes);
app.use('/api', service_routes);
app.use('/api', valoracion_routes);

module.exports = app;