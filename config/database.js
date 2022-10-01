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

};


/**
 * mongodb
 * 
 *  Um documento é uma estrutura muito semelhante ao JSON, com a diferença de que possui mais tipos.
 * Para agrupar documentos, é utilizado coleções (collections), que são análogas as tabelas de um banco de dados relacional.
 * Dentro de uma collection, podemos salvar documentos com estrutura diferentes.
 * Documentos são gravados na estrutura BSON
 */

