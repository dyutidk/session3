const http=require("http");
const fs=require("fs");
const server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write("Welcome to home page");
        res.end();
    }
    if(req.url=='/users'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
    if(req.url=='/friends'){
        var data=fs.readFileSync("friendlist.txt","utf8");
        res.write(data);
        res.end();
    }
});
server.listen(3000);
console.log('listening on port 3000...');