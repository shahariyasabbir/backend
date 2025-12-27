const express = require('express');
const app=express();

app.use(function(req,res,next){
console.log("middle");
next();
});

app.use(function(req,res,next){
console.log("middleman nehi rahenge");
next();
}); 


app.get("/", function(req,res){
    res.send("champion is rahi");
});// its the routes

app.listen(3000);