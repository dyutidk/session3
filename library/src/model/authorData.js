const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/librarydb");
const Schema=mongoose.Schema;
var NewAuthorSchema=new Schema({
    name : String,
    language : String

});
var authorData=mongoose.model("Author-data",NewAuthorSchema);
module.exports=authorData;