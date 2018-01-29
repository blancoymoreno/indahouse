'use strict'

var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');
var Service = require('../models/service');
var Category = require('../models/category');

function getCategory(req, res){
    var categoryId = req.params.id;

    Category.findById(categoryId).populate({path: 'service'}).exec((err, category)=>{
        if(err){
            res.status(500).send({message: 'Error en la peticion'});
        }else{
            if(!category){
                res.status(404).send({message: 'La categoria no existe'});
            }else{
                res.status(200).send({category});
            }
        }
    });
    
}

function saveCategory(req, res){
    var category = new Category();

    var params = req.body;
    category.title = params.title;
    category.description = params.description;
    category.year = params.year;
    category.image = 'null';
    category.service = params.service;

    category.save((err, categoryStored) => {
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(!categoryStored){
                res.status(404).send({message: 'No se ha guardado la categoría'});
            }else{
                res.status(200).send({category: categoryStored});
            }
        }
    })

}
module.exports = {
    getCategory,
    saveCategory
}