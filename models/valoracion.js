'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ValoracionSchema = Schema({
    numEvaluacion: Number,
    comentario: String,
    idUsuario: String,
    idProvider: String
});

module.exports = mongoose.model('valoracion', ValoracionSchema);