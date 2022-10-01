var api = {};

api.lista = function(req, res) {
    
    var grupos = [
        { _id: 1, nome: 'Games' },
        { _id: 1, nome: 'Florest' },
        { _id: 1, nome: 'Others' }
    ];
    
    res.json(grupos);

};

module.exports = api;
