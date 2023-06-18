const express=require('express');
const cors=require("cors")
const app=express();
app.use(express.json());
const adminRouter = require('./Routes/admin.route')
const lawyerRouter = require('./Routes/lawyer.route')
const GoogleRouter=require('./Routes/googleAuth.router')
const http=require('http');
const  connection  = require('./db');
const  {userRoute}  = require('./Routes/user.route');



require("dotenv").config();
const server=http.createServer(app);



app.use(cors())
// ========================================Routes

app.get('/',(req,res) => {
    res.send("Welcome to the home route")
})

app.use('/admin',adminRouter);
app.use("/user",userRoute)
app.use("/lawyer",lawyerRouter)
app.use("/", GoogleRouter)







// ==========================listening the server
server.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error.message)
    }
    console.log("connected to server")
})