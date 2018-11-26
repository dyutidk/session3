const express=require("express");
const chalk=require("chalk");
const path=require("path");
const nav=[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/aboutus",title:"About Us"},{link:"/contactus",title:"Contact Us"},{link:"/admin",title:"Admin"},{link:"/addauthor",title:"Add Author"}];
const booksRouter=require("./src/routes/bookRoutes.js")(nav);//passing nav to bookRoutes as a parameter
const authRouter=require("./src/routes/authorRoutes.js")(nav);
const adminRouter=require("./src/routes/adminRoutes.js")(nav);
const addAuthRouter=require("./src/routes/addAuthorRoutes")(nav);
const abtusRouter=require("./src/routes/aboutRoutes.js")(nav);
const contactusRouter=require("./src/routes/contactusRoutes.js")(nav);


var app=new express();


app.use(express.static(path.join(__dirname,'/public')))
app.use("/books",booksRouter);
app.use("/authors",authRouter);
app.use("/aboutus",abtusRouter);
app.use("/admin",adminRouter);
app.use("/addauthor",addAuthRouter);
app.use("/contactus",contactusRouter);
app.set("views","./src/views");
app.set("view engine","ejs");

app.get('/',function(req,res){
    res.render("index",{title:"Library",nav});//passing nav array
                        //can concatenate paths using joint func of path module or string oncat
    //res.sendFile(path.join(__dirname,"/views_old/index.html"));

});
app.listen(8080,function(){
    
    console.log("listening to port"+chalk.red("8080"));
});