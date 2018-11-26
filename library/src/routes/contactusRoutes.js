const express=require("express");
const contactRouter=express.Router();
function router(nav){
    data=" Delhi Public Library,Delhi 01,Ph:+91 9876543210";
        
        contactRouter.route("/").get((req,res)=>{res.render("contactus",{title:"Contact Us",nav,data:data})});
        return contactRouter;
}
module.exports=router;