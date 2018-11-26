const mongoose=require("mongoose");//require mongoose package
mongoose.connect("mongodb://localhost:27017/librarydb");//connect to library db database in mongodb at port 27017
const Schema=mongoose.Schema;//get mongoose Schema
var NewBookSchema=new Schema({//define our Schema
    bookname : String,
    author : String,
    publication :String,
    genre : String,
    copies : Number
});
var Bookdata=mongoose.model("Book-data",NewBookSchema);//create a schema model specifying collection name Book-data
module.exports=Bookdata;//export the book data model