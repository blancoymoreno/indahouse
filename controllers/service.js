'use strict'

var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var Service = require('../models/service');
var Category = require('../models/category');

function getService(req, res){
    var serviceId = req.params.id;

    Service.findById(serviceId).populate({path: 'category'}).exec((err, service)=>{
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!service){
                res.status(404).send({message: 'El servicio no existe'});
            }else{
                res.status(200).send({service});
            }
        }
    });
    
}


function getServices(req, res){
    var categoryId = req.params.category;
    if(!categoryId){
        //sacar todas las categorias de la bd
        var find = Service.find({}).sort('title');
    }else{
        // sacar los servicios de una categoria concreta de la bd
        var find = Service.find({category: categoryId}).sort('year');
    }

    find.populate({path: 'category'}).exec((err, services) => {
        if(err){
            res.status(500).send({message: 'error en la petición'});
        }else{
            if(!services){
                res.status(404).send({message: 'no hay servicios'});
            }else{
                res.status(200).send({services});
            }
        }
    })
}
function saveService(req, res){
    var service = new Service();

    var params = req.body;
    service.title = params.title;
    service.description = params.description;
    service.year = params.year;
    service.image = 'null';
    service.category = params.category;

    service.save((err, serviceStored) => {
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(!serviceStored){
                res.status(404).send({message: 'No se ha guardado el servicio'});
            }else{
                res.status(200).send({service: serviceStored});
            }
        }
    });

}
function updateService(req, res){
    var serviceId = req.params.id;
    var update = req.body;
    
    Service.findByIdAndUpdate(serviceId, update, (err, serviceUpdated) => {
        if(err){
            
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(!serviceUpdated){
                res.status(404).send({message: 'No se ha actualizado el servicio, puede que no exista'});
            }else{
                res.status(200).send({service: serviceUpdated});
            }
        }
    });
}
module.exports = {
    getService,
    saveService,
    getServices,
    updateService
}