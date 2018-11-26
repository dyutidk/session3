const express=require("express");
const booksRouter=express.Router();
const Bookdata=require("../model/bookData.js")
function router(nav){

    
    booksRouter.route("/").get((req,res)=>
        {
            Bookdata.find().then(function(books){
                res.render("books",{title:"Books",books,nav})
        });
    });
    booksRouter.route("/:id").get((req,res)=>{
        
        const id=req.params.id;
        Bookdata.findOne({_id:id}).then(function(book){
            res.render("book",{title:"Book",nav,book})
        })
        
    });
    return booksRouter;
}
module.exports=router;
