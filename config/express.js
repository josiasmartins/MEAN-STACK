var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

// configurações do express
// middleare: são filtro aplicado nas requisições;
app.set('secret', 'homemavestruz');
app.use(express.static('./public'));
app.use(bodyParser.json());

// require('../app/routes/foto')(app);
// require('../app/routes/grupo')(app);
// consign: faz o require de todos os arquivos do routes
consign({ cwd: 'app' })
    .include('models')
    .then('api')
    .then('routes/auth')
    .then('routes')
    .into(app);

// exportar
module.exports = app;