'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComentarioSchema = Schema({
    number: String,
    description: String,
    service: {type: Schema.ObjectId, ref: 'Service'},
    image: String
});

module.exports = mongoose.model('Comentario', ComentarioSchema);