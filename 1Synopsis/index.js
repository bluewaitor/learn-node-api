/**
 * Created by bluewaitor on 15/9/29.
 */

//synopsis 梗概

var http = require('http');

http.createServer(function(requrest, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
