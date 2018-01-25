'use strict'

var path = require('path');
var fs = require('fs');

var Service = require('../models/service');
var Category = require('../models/category');

function getService(req, res){
    res.status(200).send({message: 'Metodo getservice del controlador service.js'});
}

function saveService(req, res){
    var service = new Service();

    var params = req.body;
    service.name = params.name;
    service.description = params.description;
    service.image = params.image;

    service.save((err, serviceStored) => {
        if(err){
            res.status(500).send({message: 'Error al guardar el servicio'});
        }else{
            if(!serviceStored){
                res.status(404).send({message: 'El artista no ha sido guardado'});
            }else{
                res.status(200).send({service: serviceStored});
            }
        }
    });
}

module.exports = {
    getService,
    saveService
};