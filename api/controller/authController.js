const User = require('../model/user')

const  Cryptojs=require('crypto-js');
const { json } = require('express');
const jwt=require('jsonwebtoken')


//register

const User_register=async(req,res)=>{
    const newUser=new User({
        name:req.body.name,
        password:Cryptojs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        email:req.body.email,
        company:req.body.company
    })
    try{
       const savedUser   = await newUser.save()
       res.status(201).json({savedUser:savedUser})
    }catch(err){
        res.status(500).json(err);
    }

}


//Login

const user_Login=async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        if(user){
             if(user.isBlocked){
    res.status(401).json({err:"you are not allowed to login"})
   }

        !user&& res.status(401).json({err:"wrong credentials"})
        const hashedPassword=Cryptojs.AES.decrypt(

            user.password,process.env.PASS_SEC 
            );
      const  Originalpassword=hashedPassword.toString(Cryptojs.enc.Utf8)
        Originalpassword != req.body.password && 
        res.status(401).json({err:"wrong credentials"})
            //setting jwt token
            console.log(user);
        const accessToken=jwt.sign({
            id:user._id,
           
        },process.env.JWT_SEC,{expiresIn:"3d"}
        );


        const {password,...others}=user._doc//mongo db stores it file in _doc so we use ._doc


        res.status(200).json({...others,accessToken})
        }else{
            res.status(401).json({err:"user doesn't exist signup"})
        }
  
    }catch(err){
        res.status(500),json(err)
    }

}


module.exports={User_register,user_Login}
