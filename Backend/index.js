const express=require('express');
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(cors())
const http=require('http');
const  connection  = require('./db');

require("dotenv").config();
const server=http.createServer(app);


server.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error.message)
    }
    console.log("connected to server")
})