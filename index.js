var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var flash = require('express-flash');
var usersRouter = require('./routers')
var session = require('express-session')
const mongoose = require('./connect')

// pug configs
app.set("views","./views")
app.set("view engine","pug")



app.use(session({
    secret:'1234567catr',
    resave: false,
    saveUninitialized:true,
    cookie:{maxAge:60000}
}))

app.use(flash())

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",usersRouter)


app.listen(8081)
