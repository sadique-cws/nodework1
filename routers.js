var express = require('express')
var router = express.Router();

var mongoose = require('./connect');
var userModel = require('./userModel');

router.get("/",function(req,res){
    res.render("home")
})

router.post("/signup",function(req,res, next){
    req.assert('name', 'name is required').notEmpty();
    req.assert('email', "a valid email is required").isEmail();
    req.assert('contact', "contact is required").notEmpty();
    req.assert('password', "password is required").notEmpty();

    var errors = req.validationErrors();

    if(!errors){
        var userDetails = new userModel({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            password : req.body.password
        });

        userDetails.save((err, doc) => {
                if(!err){
                    req.flash('success',"user data inserted successfully")
                    req.redirect("/");
                }
                else{
                    console.log("error during record insertion")
                }
        })
    }
    else{
        var error_msg = '';
        errors.forEach(function(error){
            error_msg += error.msg + "<br>"
        })
        req.flash('error',error_msg)

        res.redirect("/")
    }
})

module.exports = router;