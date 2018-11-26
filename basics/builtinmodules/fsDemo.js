const fs=require("fs");
//synchronous
const files=fs.readdirSync("./");
console.log(files);