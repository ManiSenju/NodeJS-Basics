var http = require('http');
var fs = require('fs');

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end("Hello World\n");
// }).listen(1337,'127.0.0.1');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html = fs.readFileSync(__dirname+'/index.html','utf8');
    var msg = "Hello World!...";
    html = html.replace('{Message}',msg);
    res.end(html);
}).listen(1337,'127.0.0.1');