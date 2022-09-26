var express = require('express');
var app = express();

// configurações do express
// middleare: são filtro aplicado nas requisições
app.use(express.static('./public'));

// exportar
module.exports = app;