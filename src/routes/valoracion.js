'use strict'

var express = require('express');
var ValoracionController = require('../controllers/valoracion');

var api = express.Router();

api.get('/valoracion/:id', ValoracionController.findById);
api.post('/create-valoracion', ValoracionController.create);
api.get('/valoraciones/:id', ValoracionController.findAllByProvider);
api.get('/valoraciones/',ValoracionController.findAll);

module.exports = api;