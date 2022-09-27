var express = require('express');
var app = express();
var consign = require('consign');

// configurações do express
// middleare: são filtro aplicado nas requisições
app.use(express.static('./public'));

// require('../app/routes/foto')(app);
// require('../app/routes/grupo')(app);
// consign: faz o require de todos os arquivos do routes
consign()
    .include('app/routes')
    .into(app);

// exportar
module.exports = app;