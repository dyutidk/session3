var fs=require("fs");
var data=new Uint8Array(Buffer.from("This is Dyuthi"));
fs.writeFile('friendlist.txt',data,(err)=> {
    if(err) throw err;
    console.log("The file has been written and saved");
    
}); 