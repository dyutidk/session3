const http=require("http");
const server=http.createServer(function(req,res){
    res.write("Hello World");//write response to the client
    res.end();//end the response
});
server.listen(3000);
console.log('Listening on port 3000..');