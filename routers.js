const { Route } = require('express');
var express = require('express')
var router = express.Router();

var userModel = require('./userModel');

router.get("/insert",function(req,res){
    res.render("home")
})

router.get("/",(req,res)=>{
    userModel.find({},function(error,users){
        res.render("data",{"users": users});
    })
})

router.post("/signup",function(req,res){
   
        var userDetails = new userModel({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            password : req.body.password
        });

        userDetails.save()
        req.flash('success',"user data inserted successfully")
        return res.redirect("/")
})

module.exports = router;