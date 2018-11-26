const os=require("os");
var totMem=os.totalmem();
var freeMem=os.freemem();
//template string using back tick
console.log(`Total Memory:${totMem}`);
console.log(`Free Memory:${freeMem}`);