const express=require("express");
const abtRouter=express.Router();
function router(nav){
        
        abtRouter.route("/").get((req,res)=>{res.render("abtus",{title:"About Us",nav})});
        return abtRouter;
}
module.exports=router;