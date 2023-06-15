const express=require('express');
const { UserModel } = require('../Models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const otpGenerator = require('otp-generator')
const userRoute=express.Router();

userRoute.post("/register",async(req,res)=>{
    const {Phone_No,email,password,Name , city }=req.body;
    const user=await UserModel.find({Phone_No,email});
    //console.log(Phone_No)
    try {
        
        //console.log(user)
        if(user.length===0){
            bczrypt.hash(password,5,async(err,hash)=>{
                if(err){
                    throw err
                }
                let userp=await new UserModel({Name,email,password:hash,Phone_No,city , role:"user" , verify:false});
                 userp.save();
                let OTP= otpGenerator.generate(6, { upperCaseAlphabets: true, specialChars: true });
                res.status(200).send({msg:"user registered!",otp:OTP});
            })
        }
        else{
            res.status(400).send({msg:"user already exist please Login!"})
        }
    } catch (error) {
        res.status(400).send({msg:"error can't register the user"})
    }
    
})

userRoute.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        let user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,async(err,result)=>{
                if(err)
                throw err;
                if(result){
                    res.status(200).send({msg:"sucessfully Login!","token":jwt.sign({'userID':user[0]._id},'masai'),"Name":user[0].Name})
                }else{
                    res.status(400).send({msg:"Wrong credentials"})
                }
            })
        }else{
            res.status(400).send({msg:"Registered First!"})
        }
    } catch (error) {
        res.status(400).send({"msg":error.message});
    }
})


const transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.email',
    port: 587,
    secure:false,
    auth: {
        user: 'yashkumar18gupta@gmail.com',
        pass: 'ivjkzdcsufghclrb'
    }
});

transporter
     .sendMail({
        to:"lawlink.legal.services@gmail.com",
        from:"yashkumar18gupta@gmail.com",
        subject:"Verify your Email for registraion on LawLink",
        text:"hey it's from node.js, first mail",
        html:`<button><a href="https://masaischool.com/">click me</a></button>`
     })
     .then(()=>{
        console.log("mail sent succesfully")
     })
     .catch((err)=>{
        console.log(err)
     })




module.exports={userRoute}