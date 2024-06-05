const express = require("express");
const http = require("http");

const app = express();
app.get('/',(req,res)=>{
    return res.send("Hello from home page");
})

app.get('/about',(req,res)=>{
    return res.send("Hello from about page")
})

app.get('/contact',(req,res)=>{
    return res.send("Contact Us")
})

app.listen(8000,()=>console.log("Server started"));