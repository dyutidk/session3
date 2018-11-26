const express=require("express");
const booksRouter=express.Router();
function router(nav){
    var books=[{name:"Book1",author:"author1",genre:"genre1"},
    {name:"Book2",author:"author2",genre:"genre2"},
    {name:"Book3",author:"author3",genre:"genre3"},
    {name:"Book4",author:"author4",genre:"genre4"},
    {name:"Book5",author:"author5",genre:"genre5"}];
    booksRouter.route("/").get((req,res)=>{res.render("books",{title:"Books",books,nav})
                                            });
    booksRouter.route("/:id").get((req,res)=>{
        const id=req.params.id;
        res.render("book",{title:"Book",nav,book:books[id]}
    )});
    return booksRouter;
}
module.exports=router;
