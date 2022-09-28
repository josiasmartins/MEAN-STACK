var api = {};

var fotos = [
    {_id: 1, titulo: 'Leão', url: 'https://i.ytimg.com/vi/Ml5rhdvCRrs/maxresdefault.jpg'},
    {_id: 2, titulo: 'Leão 2', url: 'https://http2.mlstatic.com/D_NQ_NP_756502-MLB43611446286_092020-O.jpg'}
];

api.lista = function(req, res) {
    
    res.json(fotos);
    console.log('Tentando obter as fotos');
};

api.buscaPorId = function(req, res) {

    var foto = fotos.find(function(foto) {
        return foto._id = req.params.id;
    });

    res.json(foto);

};

api.removePorId = function(req, res) {
    
    fotos = fotos.filter(function(foto) {
        return foto._id != req.params.id;
    });

    res.sendStatus(204);

}

module.exports = api;