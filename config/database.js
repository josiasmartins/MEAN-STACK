var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/alurapic');

mongoose.connection.on('connected', function() {
    console.log('conectado ao banco de dados');
});