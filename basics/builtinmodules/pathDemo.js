//console.log(__filename);//returns the path of this js file
const path=require("path");
var pathObj=path.parse(__filename);
console.log(pathObj);//pathObj.name gives file name
