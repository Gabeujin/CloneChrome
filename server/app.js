const httpApp   = require('http');//프로토콜
const fs        = require('fs');//파일 시스템

const hostNm    = '127.0.0.1';
const port      = '8081';

let app = httpApp.createServer((req, res)=>{
    let url = req.url;
    if(req.url == '/')
    {
        url = '/index.html';
    }//end if

    if(req.url == '/favicon.ico')
    {
        return res.writeHead(404);
    }//end if

    console.log(__dirname + url);
    res.writeHead(200);
    try{
        res.end(fs.readFileSync(__dirname + url));
    }catch(Exception){
        res.end(fs.readFileSync(__dirname + '/index.html'));
    }
}).listen(port, hostNm);

console.log(`server running ${hostNm}:${port}`);
