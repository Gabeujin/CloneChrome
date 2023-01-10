const httpApp = require('http');

let hostNm = '127.0.0.1';
let port = '8081';

httpApp.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    res.end("Hello world!! feat.node.js");
}).listen(port, hostNm);

console.log(`server running ${hostNm}:${port}`);
