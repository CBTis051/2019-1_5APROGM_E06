var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'application/json; charset=utf-8'});

    res.end('Hola Mundo Node Js Repo Git - Hernadez Ortega William Oman\n');
}).listen(8081);
console.log('Server running on port 8081');