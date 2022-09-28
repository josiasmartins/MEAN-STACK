module.exports = function(uri) {

    var mongoose = require('mongoose');
    
    mongoose.connect('mongodb://'+uri);
    
    // mongoose.connection.on('connected', function() {
    //     console.log('conectado ao banco de dados');
    // });
    
    mongoose.connection.on('connected', function() {
        console.log('conectado ao banco de dados');
    });
    
    mongoose.connection.on('error', function(error) {
        console.log('Erro na conexão: '+ error);
    });
    
    mongoose.connection.on('disconnected', function() {
        console.log('Desconectado do MongoDB');    
    });
    
    // SIGINT: evento sinaliza o termino da aplicação
    process.on('SIGINT', function() {
    
        mongoose.connection.close(function() {
            console.log('Conexão fechada pelo termino da aplicação');
            // exit: retorna o statusCode do processo;
            process.exit(0);
        });
    
    });

}
