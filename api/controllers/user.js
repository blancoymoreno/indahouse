'use strict'
var path = require('path');
var fs = require('fs');
var bcrypt = require('bcrypt-nodejs');
var Service = require('../models/service');
var jwt = require('../services/jwt');
var Category = require('../models/category');
var User = require('../models/user');


function pruebas(req, res){
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con node y mongo'
    });
}

function saveUser(req, res){
    var user = new User();

    var params = req.body;

    console.log(params);

    user.name = params.name;
    user.surname = params.surname;
    user.mlastname = params.mlastname;
    user.sexo = params.sexo;
    user.bday = params.bday;
    user.email = params.email;
    user.mobile = params.mobile;
    user.estudios= params.estudios;
    user.region= params.region;
    user.cuidad= params.cuidad;
    user.avdireccion= params.avdireccion;
    user.ndireccion= params.ndireccion;
    user.deptodireccion= params.deptodireccion;
    user.pagoservicio= params.pagoservicio;
    user.ofreservicio= params.ofreservicio;
    user.role = 'ROLE_USER';
    user.image = 'null';
    user.valoracionPromedio = params.valoracionPromedio;
    user.idService = params.idService;
    user.categoriaServicio = params.categoriaServicio;
    user.service = params.service;
    user.presentacion= params.presentacion;

    if(params.password){
        //encriptar contraseña
        bcrypt.hash(params.password, null, null, function(error, hash){
            user.password = hash;
            if(user.name != null && user.surname != null && user.email != null){
            //guardar usuario
            user.save((err, userStored) => {
                if(err){
                    res.status(500).send({message: 'Error al guardar el usuario'}); 
                }else{
                    if(!userStored){
                        res.status(404).send({message: 'No se ha registrado el usuario'});
                    }else{
                        res.status(200).send({user : userStored});
                    }
                }
            });
        }else{
            res.status(200).send({message: 'Rellena todos los campos'});
        }
        });
    }else{
        res.status(200).send({message: 'Introduce la contraseña'});
    }
}
function loginUser(req, res){
    var params = req.body;

    var email = params.email;
    var password = params.password;

    User.findOne({email: email.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!user){
                res.status(404).send({message: 'El usuario no existe'});
            }else{
                //comprobar contraseña
                bcrypt.compare(password, user.password, function(err, check){
                    if(check){
                        //devolver los datos del usuario logeado
                        if(params.gethash){
                            //devolver un token de jwt
                            res.status(200).send({
                                token: jwt.createToken(user)
                            })
                        }else{
                            res.status(200).send({user});
                        }
                    }else{
                        res.status(404).send({message: 'No se ha podido logear, compruebe que su contraseña sea correcta.'});
                    }
                });
            }
        }
    })
}
function updateUser(req, res){
    var userId = req.params.id;
    var update = req.body;

    if(userId != req.user.sub){
        return res.status(500).send({message: 'El usuario que se intenta modificar no es el mismo que está logeado'});
    }
    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if(err){
            res.status(500).send({message: 'Error al actualizar el usuario'});
        }else{
            if(!userUpdated){
                res.status(404).send({message: 'No se ha podido actualizar el usuario'});
            }else{
                res.status(200).send({user: userUpdated});
            }
        }
    });
}
function uploadImage(req, res){
    var userId = req.params.id;
    var file_name = 'No subido...';

    if(req.files){
        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[2];
        
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif'){
            User.findByIdAndUpdate(userId, {image: file_name}, (err, userUpdated) => {
                if(!userUpdated){
                    res.status(404).send({message: 'No se ha podido actualizar el usuario'});
                }else{
                    res.status(200).send({image: file_name, user: userUpdated});
                }
            });
        }else{
            res.status(200).send({message: 'extensión del archivo no válida'}); 
        }
    }else{
        res.status(200).send({message: 'No has subido ninguna imagen'});
    }
}

function getImageFile(req, res){
    var imageFile = req.params.imageFile;
    var path_file = './uploads/users/' + imageFile;
    fs.exists(path_file, function(exists){
        if(exists){
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message: 'No existe la imagen...'});
        }
    })
}

function getUser(req, res){
    var userId = req.params.id;
    User.findById(userId).populate({path: 'service'}).exec((err, user)=>{
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!user){
                res.status(404).send({message: 'El usuario no existe'});
            }else{
                res.status(200).send({user});
            }
        }
    });
}

function getUsers(req, res){
    var serviceId = req.params.service;
    if(!serviceId){
        //sacar todas los servicios de la bd
        var find = User.find({}).sort('title');
    }else{
        // sacar los usuarios de un servicio concreto de la bd
        var find = User.find({service: serviceId}).sort('year');
    }

    find.populate({path: 'service'}).exec((err, users) => {
        if(err){
            res.status(500).send({message: 'error en la petición'});
        }else{
            if(!users){
                res.status(404).send({message: 'no hay servicios'});
            }else{
                res.status(200).send({users});
            }
        }
    })
}

module.exports = {
    pruebas,
    saveUser,
    loginUser,
    updateUser,
    uploadImage,
    getImageFile,
    getUser,
    getUsers
};