'use strict'

var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');
var Service = require('../models/service');
var Category = require('../models/category');

function getService(req, res){
    var serviceId = req.params.id;

    Service.findById(serviceId, (err, service) => {
        if(err){
            res.status(500).send({message: 'Error en la petición.'});
        }else{
            if(!service){
                res.status(404).send({message: 'El servicio no existe'});
            }else{
                res.status(200).send({service});
            }
        }
    })
    
}
function getAllServices(req, res){
    if(req.params.page){
        var page = req.params.page;
    }else{
        var page = 1;
    }
    
    var itemsPerPage = 3;

    Service.find().sort('name').paginate(page, itemsPerPage, function(err, services, total){
        if(err){
            res.status(500).send({message: 'Error en la petición.'});
        }else{
            if(!services){
                res.status(404).send({message: 'No hay servicios'});
            }else{
                return res.status(200).send({
                    total_items: total,
                    services: services
                });
            } 
        }
    })
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
                res.status(404).send({message: 'El servicio no ha sido guardado'});
            }else{
                res.status(200).send({service: serviceStored});
            }
        }
    });
}

module.exports = {
    getService,
    saveService,
    getAllServices
};