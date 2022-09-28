var api = {};

api.lista = function(req, res) {
    
    var grupos = [
        { _id: 1, nome: 'esporte' },
        { _id: 1, nome: 'esporte' },
        { _id: 1, nome: 'esporte' }
    ];
    
    res.json(grupos);

};

module.exports = api;
