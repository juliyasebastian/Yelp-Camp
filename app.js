var express=require("express");
var app=express();
var bodyParser =require("body-parser");



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


var campgrounds= [
        {name:"Salmon Creek", image:"https://images.unsplash.com/photo-1482463084673-98272196658a?ixlib=rb-0.3.5&s=849b79d6ba8440283220ef84b58c5dcd&auto=format&fit=crop&w=750&q=80"},
         {name:"Mount Barker", image:"https://images.unsplash.com/photo-1474984815137-e129646c7c9a?ixlib=rb-0.3.5&s=56291b0365c052ff79c4d6a662ad8e68&auto=format&fit=crop&w=750&q=80 "},
         {name:"Mount Salmon", image:"https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-0.3.5&s=dd23e6038cd7a8421453675bd5695062&auto=format&fit=crop&w=659&q=80 "}
        ];

app.get("/",function(req, res){
    res.render("landing");
});



app.get("/campgrounds",function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});


app.post("/campgrounds",function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampgrounds ={name:name, image:image};
    campgrounds.push(newCampgrounds);
    res.redirect("/campgrounds");
 
});


app.get("/campgrounds/new",function(req, res){
   res.render("new.ejs");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});