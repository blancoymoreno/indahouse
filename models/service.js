'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = Schema({
    name: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Service', ServiceSchema);