'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var ValoracionSchema = Schema({
    numEvaluacion: Number,
    comentario: String,
    idProvider: String,
    user: Schema({
        name: String,
        surname: String,
        email: String,
        role: String,
        image: String,
        valoracionPromedio: Number,
        idService: String
    }),
    
});

module.exports = mongoose.model('valoracion', ValoracionSchema);