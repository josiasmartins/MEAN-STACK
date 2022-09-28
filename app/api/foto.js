var api = {};

api.lista = function(req, res) {
    
    var fotos = [
        {_id: 1, titulo: 'Leão', url: 'https://i.ytimg.com/vi/Ml5rhdvCRrs/maxresdefault.jpg'},
        {_id: 2, titulo: 'Leão 2', url: 'https://http2.mlstatic.com/D_NQ_NP_756502-MLB43611446286_092020-O.jpg'}
    ]

    res.json(fotos);
    console.log('Tentando obter as fotos');
};

module.exports = api;