var ttp = require('http');
http.createServer(function (req, res) {
    res.writehead(200, {'Content-Type': 'application/json; charset=utf-8'});

    res.end('Hola mundo Node JS Repo GIT - Chávez Ortiz Luis Guillermo\n');
}).listen(8081);
console.log('Server running on port 8081');