var  mongoClient = require('mongoose');

mongoClient.connect("mongodb://localhost/social")

var conn  = mongoClient.connection;

conn.on("connected",function(){
    console.log("database is connected successfully");
})


conn.on('disconnected',function(){
    console.log("database is diconnected");
})

conn.on("error", console.error.bind(console,"connection error"));


module.exports = conn;
