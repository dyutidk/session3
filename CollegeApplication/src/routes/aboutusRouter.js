const express=require("express");
const abtRouter=express.Router();
function router(courses,navlinks,navdropdown){
        
        abtRouter.route("/").get((req,res)=>{res.render("about",{title:"About Us",courses,navlinks,navdropdown})});
        return abtRouter;
}
module.exports=router;