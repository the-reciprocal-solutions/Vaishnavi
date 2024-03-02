const express = require("express")
const app = express()

app.use("/",express.static(__dirname+ "/public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine',"ejs")

app.get("/",(req,res)=>{
    res.render("index")
})  
app.get("/gallery",(req,res)=>{
    res.render("gallery")
})  


module.exports = app


