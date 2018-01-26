'use strict'

var express = require('express');
var ServiceController = require('../controllers/service');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/service/:id', md_auth.ensureAuth, ServiceController.getService);
api.post('/service', md_auth.ensureAuth, ServiceController.saveService);
api.get('/services/:page?', md_auth.ensureAuth, ServiceController.getAllServices);

module.exports = api;
