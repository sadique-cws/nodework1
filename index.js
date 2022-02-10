var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var flash = require('express-flash');
var usersRouter = require('./routers')

// pug configs
app.set("views","./views")
app.set("view engine","pug")

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use("/",usersRouter)


app.listen(8081)
