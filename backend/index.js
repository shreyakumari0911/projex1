const mongoose = require("mongoose")
var connectionUrl = "mongodb://localhost:27017/TheSwapShop"
const express = require('express')
const app = express()

mongoose.connect(connectionUrl,{useNewParser:true,useUnifiedTopology:true},(err)=>{
    if(err) throw err
    console.log("Connected")
})

app.get("/home",(req,res)=>{
    res.send("Hello")
})

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
app.use(express.urlencoded({extended:true}))
app.set("view engine","html")
app.get("/sellerpage",(req,res)=>{
    res.render("sellerpage")
})
const UserModel = require("../models/user")
app.post("/api/user",(req,res)=>{

})
const SaveUser = new UserModel(req.body)
SaveUser.save((error,savedUser)=>{
    if(error) throw error
    res.json(savedUser)
})

app.listen(9000,()=>{
    console.log("listening to port 9000")
})
