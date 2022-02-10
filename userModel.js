const mongoose = require('mongoose')
var Schema =  mongoose.Schema;
var userSchema = Schema({
    name: {type:String,require:true},
    email: {type:String,require:true},
    password: {type:String,require:true},
    contact: {type:String,require:true},
})

var userModel = mongoose.model('users',userSchema);

module.exports = userModel;
