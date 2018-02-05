'use strict'
var Valoracion = require('../models/valoracion');
var UserController = require('../controllers/user');
var User = require('../models/user');

//Agregar Valoracion
function create(req, res){
    let valoracion = new Valoracion(req.body);
    console.log(valoracion);
    valoracion.save((err, valoracionStored) => {
        if(err){
            res.status(500).send({message: 'Error al guardar la valoracion'}); 
        }else{
            if(!valoracionStored){
                res.status(404).send({message: 'No se ha registrado la valoracion'});
            }else{
                res.status(200).send({valoracion : valoracionStored});
            }
        }
    });

    //Update a usuario
    UserController.setValoraciones(valoracion, req.idProvider,req.valoracionPromedio);
}

//Buscar por id
function findById(req,res){
    Valoracion.findOne({'_id':req.params.id}, (err,valoracion) =>{
        if (err) {
            res.status(500).send(err);
        }
        if (valoracion) {
            res.status(200).send(valoracion);
        } else {
            res.status(404).send("No se ha encontrado la valoracion");
        }
    });
}

//Buscar por proveedor
function findAllByProvider(req,res){
    const idProvider = req.params.id;

    Valoracion.find({"idProvider":idProvider},(err,valoraciones) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(valoraciones);
        }
    });
}

//Buscar todos
function findAll(req,res){
    Valoracion.find((err,valoracion) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(valoracion);
        }
    });
}

module.exports = {
    findById,
    create,
    findAllByProvider,
    findAll
};