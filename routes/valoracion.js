'use strict'

var express = require('express');
var ValoracionController = require('../controllers/valoracion');

var api = express.Router();

api.get('/valoracion/:id', ValoracionController.findById);
api.post('/create-valoracion', ValoracionController.create);
api.get('/valoraciones/:id', ValoracionController.findAllByUser);
api.get('/valoraciones/',ValoracionController.findAll);
//api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;