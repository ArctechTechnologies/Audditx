const express = require('express')
const app = express()
const moongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
process.env

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const middleware =(req,res,next)=>{
    console.log("middleware")
    next();
}

app.use(require('./router/router'))
console.log('asda')



app.listen(3000,()=>{
   console.log("backend Started at 3000")
})



