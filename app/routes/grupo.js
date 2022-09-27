module.exports = function(app) {

    app.get('/v1/grupos', function(req, res) {
        
        var grupos = [
            { _id: 1, nome: 'esporte' },
            { _id: 1, nome: 'esporte' },
            { _id: 1, nome: 'esporte' }
        ];
    
        res.json(grupos);
    });
    
}