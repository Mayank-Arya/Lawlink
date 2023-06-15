const express=require('express');
const cors=require("cors")
const app=express();
app.use(express.json());
const adminRouter = require('./Routes/admin.route')
app.use(cors())
const http=require('http');
const  connection  = require('./db');

require("dotenv").config();
const server=http.createServer(app);

app.get('/',(req,res) => {
    res.send("Welcome to the home route")
})

app.use('/admin',adminRouter)

server.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error.message)
    }
    console.log("connected to server")
})