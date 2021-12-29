const http=require("http")
const fs=require("fs")
fs.writeFileSync("index.html","<h1>Hello world</h1>")

http.createServer(function(req,res){
    const data=fs.readFileSync("index.html")
        
            res.writeHead(200,{"Content-type":"text/html"});
            res.end();
        

}).listen(4004)