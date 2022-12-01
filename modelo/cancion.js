'use strict'
var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var EsquemaCancion= Schema({
    titulo: String,
    descripcion: String,
    year: Number,
    imagen: String,
    artista: {type: Schema.ObjectId, ref: "Album"}
});

module.exports= mongoose.model('Cancion', EsquemaCancion);