'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    category: {type: Schema.ObjectId, ref: 'Category'}
});

module.exports = mongoose.model('Service', ServiceSchema);