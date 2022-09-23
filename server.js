var http = require('http');
// import { http } from 'http';

http.createServer(function(req, res) {

    if (req.url.startsWith('/index.html')) req.end('index.html');

    if (req.url.startsWith('/estilos.css')) req.end('estilos.css');

    // console.log('PAPAI');
    var indece = req.url.indexOf('=');
    var parametro = req.url.substring(indece+1);
    res.end(parametro);

}).listen(3000, function() {
    console.log('NEH')
});