module.exports = function(app) {

    var api = app.api.foto;
    
    app.route('/v1/fotos')
        // get: usado para consultar um recurso da api
        .get(api.lista)
        // post: usado para adicionar um recurso na api
        .post(api.adiciona);

    app.route('/v1/fotos/:id')
        // get: usado para ler um recurso
        .get(api.buscaPorId)
        // delete: usado para deletar um recurso
        .delete(api.removePorId)
        // verbo put: utiizado para atulizar um recurso do service
        .put(api.atualiza);

}