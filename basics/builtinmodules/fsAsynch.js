const fs=require("fs");
fs.readdir("./",function(err,files){
    if(err) console.log("error:",r);
    else console.log("result:",files);
});//callback function 