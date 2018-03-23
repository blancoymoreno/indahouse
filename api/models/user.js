'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    //mlastname: String,
    //sexo: String,
    //bday: String,
    email: String,
    //mobile: String,
    password: String,
    role: String,
    image: String,
    valoracionPromedio: Number,
    valoraciones: [ ],
    idService: String
});

module.exports = mongoose.model('User', UserSchema);