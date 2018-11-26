const http=require("http");
const server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write("Hello World");//write response to the client
        res.end();//end the response 
    }
    if(req.url=='/users'){
        res.write(JSON.stringify([1,2,3]));//write response to the client
    res.end();//end the response
    }
    
});
server.listen(3000);
console.log('Listening on port 3000..');