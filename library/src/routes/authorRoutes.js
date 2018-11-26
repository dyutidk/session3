const express=require("express");
const authRouter=express.Router();
function router(nav){
        var authors=[
                {name:"J K Rowling",language:"English"},
                {name:"Dan Brown",language:"English"},
                {name:"Ravinder Singh",language:"Hindi"},
                {name:"Daniel steel",language:"German"},
                {name:"Stephnie Lawyer",language:"Spanish"}];
        authRouter.route("/").get((req,res)=>{res.render("authors",{title:"Authors",authors,nav})});
        authRouter.route("/:id").get(
                (req,res)=>{
                        const id=req.params.id;
                        res.render("author",
                                {title:"Author",
                                nav,author:authors[id]}
                        

        )});
        return authRouter;
}
module.exports=router;