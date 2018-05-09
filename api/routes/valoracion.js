'use strict'

var express = require('express');
var ValoracionController = require('../controllers/valoracion');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/users' });

api.get('/valoracion/:id', ValoracionController.findById);
api.post('/create-valoracion', ValoracionController.create);
api.get('/valoraciones/:id', ValoracionController.findAllByProvider);
api.get('/valoraciones/', ValoracionController.findAll);

module.exports = api;