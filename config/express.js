var express = require('express');
var app = express();

// configurações do express
// middleare: são filtro aplicado nas requisições
app.use(express.static('./public'));

require('../app/routes/foto')(app);
require('../app/routes/grupo')(app);

// exportar
module.exports = app;