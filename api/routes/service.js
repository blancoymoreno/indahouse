'use strict'

var express = require('express');
var ServiceController = require('../controllers/service');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/service' });

api.get('/service/:id', md_auth.ensureAuth, ServiceController.getService);
api.post('/service', md_auth.ensureAuth, ServiceController.saveService);
api.get('/services/:category?', md_auth.ensureAuth, ServiceController.getServices);
api.put('/service/:id', md_auth.ensureAuth, ServiceController.updateService);
api.delete('/service/:id', md_auth.ensureAuth, ServiceController.deleteService);

module.exports = api;