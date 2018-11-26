
const express=require("express");
const adminRouter=express.Router();
const Bookdata=require("../model/bookData.js")
function router(nav){
    adminRouter.route("/").get((req,res)=>{{res.render("addbook",{title:"Admin",nav})}});
    adminRouter.route("/add").get((req,res)=>{
        var item={
            bookname : req.param("bookname"),
            author : req.param("author"),
            publication : req.param("publication"),
            genre : req.param("genre"),
            copies : req.param("copies")

        }
        var book=new Bookdata(item);
        book.save();
        res.redirect('/books')
    });

    return adminRouter;
    
}
module.exports=router;