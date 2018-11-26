
const express=require("express");
const addAuthorRouter=express.Router();
const AuthorData=require("../model/authorData.js");
function router(nav){
    addAuthorRouter.route("/").get((req,res)=>
    {
        {res.render("addAuthor",{title:"Add Author",nav})}
    });
    addAuthorRouter.route("/add").get((req,res)=>
    {
        var item={
            name : req.param("name"),
            languge : req.param("language")
           

        }
        var author=new AuthorData(item);
        author.save();
        res.redirect('/aboutus')
    });

    return addAuthorRouter;
    
}
module.exports=router;