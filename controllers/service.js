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
function updateService(req, res){
    var serviceId = req.params.id;
    var update = req.body;

    Service.findByIdAndUpdate(serviceId, update, (err, serviceUpdated) => {
        if(err){
            res.status(500).send({message: 'Error al guardar el servicio'});
        }else{
            if(!serviceUpdated){
                res.status(404).send({message: 'El artista no ha sido actualizado'});
            }else{
                res.status(200).send({service: serviceUpdated});
            }
        }
    });
}

function deleteService(req, res){
    var serviceId = req.params.id;

    Service.findByIdAndRemove(serviceId, (err, serviceRemoved) => {
        if(err){
            res.status(500).send({message: 'Error al eliminar el servicio'});
        }else{
            if(!serviceRemoved){
                res.status(404).send({message: 'El servicio no ha sido eliminado'}); 
            }else{
                res.status(200).send({serviceRemoved});
                //aquí comienza la eliminacion de los elementos asociados al servicio removido
               /* Category.find({service: serviceRemoved._id}).remove((err, categoryRemoved) => {
                    if(err){
                        res.status(500).send({message: 'Error al eliminar el elemento asociado'});
                    }else{
                        if(!categoryRemoved){
                            res.status(404).send({message: 'El elemento asociado no ha sido eliminado'}); 
                        }else{
                            Comentario.find({category: categoryRemoved._id}).remove((err, comentarioRemoved) => {
                                if(err){
                                    res.status(500).send({message: 'Error al eliminar el elemento hijo asociado'});
                                }else{
                                    if(!comentarioRemoved){
                                        res.status(404).send({message: 'El elemento hijo asociado no ha sido eliminado'}); 
                                    }else{
                                        res.status(200).send({service: serviceRemoved}); 
                                    }
                                }
                            });
                        }
                    }
                });*/
            }
        }
    });
}


module.exports = {
    getService,
    saveService,
    getAllServices,
    updateService,
    deleteService
};