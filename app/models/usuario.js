var mongoose = require('mongoose');


// SCHEMA: usado para criar o modelo
var schema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
});

mongoose.model('Usuario', schema);

