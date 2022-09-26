var express = require('express');
var app = express();

// configurações do express
// middleare: são filtro aplicado nas requisições
app.use(express.static('./public'));

app.get('/v1/fotos', function(req, res) {

    var fotos = [
        {_id: 1, titulo: 'Leão', url: 'http://www.fundosanimais.com/Minis/leoes.jpg'},
        {_id: 2, titulo: 'Leão 2', url: 'http://www.fundosanimais.com/Minis/leoes.jpg'}
    ]

    res.json(fotos);
    console.log('Tentando obter as fotos');
});

// exportar
module.exports = app;