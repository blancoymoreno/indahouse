'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    mlastname: String,
    sexo: String,
    bday: String,
    email: String,
    mobile: String,
    estudios: String,
    region: String,
    cuidad: String,
    avdireccion: String,
    ndireccion: String,
    deptodireccion: String,
    pagoservicio: String,
    ofreservicio: String,
    password: String,
    role: String,
    image: String,
    valoracionPromedio: Number,
    valoraciones: [ ],
    idService: String,
    categoriaServicio: String,
    nombreServicio: String
});

module.exports = mongoose.model('User', UserSchema);