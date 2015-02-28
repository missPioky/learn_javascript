//cargo mis modulos
var http = require("http");

//listener
var listener = function(request, response){
    response.writeHead(200);
    response.end('<h1>Hola mundo</h1>');
};
//Creo server
    var server = http.createServer(listener);
    
//correr servidor
server.listen(process.env.PORT, process.env.IP);
