'use strict'

var express = require('express');
var ServiceController = require('../controllers/service');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/services' });

api.get('/service/:id', ServiceController.getService);
api.post('/service', md_auth.ensureAuth, ServiceController.saveService);
api.get('/services/:category?', ServiceController.getServices);
api.put('/service/:id', md_auth.ensureAuth, ServiceController.updateService);
api.delete('/service/:id', md_auth.ensureAuth, ServiceController.deleteService);
api.post('/upload-image-service/:id', [md_auth.ensureAuth, md_upload], ServiceController.uploadImage);
api.get('/get-image-service/:imageFile',  ServiceController.getImageFile);

module.exports = api;