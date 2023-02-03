//decleration 
const express = require("express")
const app = express()
const router = express.Router()
const jwt = require('jsonwebtoken')

// conncetion
require('../database/connection')



router.get('/',(req,res)=>{
    // res.json("connected")
    const user = 'lkj'
     jwt.sign({user},process.env.SECRET_KEY,(err,token)=>{
        res.json(token)
    })

})

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYXNkYXMiLCJpYXQiOjE2NzUzNTQ2NjN9.1AA6lnHXzygacTIoTP-5tvqkNnjtFnCkzpw0XMJ9tA0"


module.exports  = router