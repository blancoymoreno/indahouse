'use strict'

var express = require('express');
var CategoryController = require('../controllers/category');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/categories' });

api.get('/category/:id', CategoryController.getCategory);
api.post('/category', CategoryController.saveCategory);
api.get('/categories/:page?', CategoryController.getAllCategories);
api.put('/category/:id', md_auth.ensureAuth, CategoryController.updateCategory);
api.delete('/category/:id', md_auth.ensureAuth, CategoryController.deleteCategory);
api.post('/upload-image-category/:id', [md_auth.ensureAuth, md_upload], CategoryController.uploadImage);
api.get('/get-image-category/:imageFile',  CategoryController.getImageFile);
module.exports = api;
