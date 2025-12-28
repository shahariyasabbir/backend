const express = require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
console.log("middle");
next();
});

app.use(function(req,res,next){
console.log("middleman nehi rahenge");
next();
}); 


app.get("/about", function(req,res){
    res.send("champion is rahi");
});// its the routes
app.get("/profile",function(req,res,next){
    return next(new Error("Not implemented"));
});

app.listen(3000);