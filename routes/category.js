'use strict'

var express = require('express');
var CategoryController = require('../controllers/category');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/category' });

api.get('/category/:id', md_auth.ensureAuth, CategoryController.getCategory);
api.post('/category', md_auth.ensureAuth, CategoryController.saveCategory);

module.exports = api;