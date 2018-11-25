const express=require("express");
const path=require("path");

const courses=[{name:"Electronics and Communication"},
            {name:"Computer Science"},{name:"Civil Engineering"},
            {name:"Mechanical Engineering"},
            {name:"Electrical and Electronics Engineering"},
            {name:"Information Technolgy"}]
const navdropdown=[{link:"/courses",title:"Courses"},
                {link:"/departments",title:"Departments"}];
const navlinks=[{link:"/about",title:"About Us"}];
var app=new express();
const aboutRouter=require("./src/routes/aboutusRouter.js")(courses,navlinks,navdropdown);


app.use(express.static(path.join(__dirname,'/public')))
app.use("/aboutus",aboutRouter);
app.set("views","./src/views");
app.set("view engine","ejs");


app.get('/',function(req,res){
    res.render("index",{title:"Home",navlinks,navdropdown,courses});

});
app.get('/:coursename')
app.listen(6000,function(){
    
    console.log("listening to port 6000");
});
