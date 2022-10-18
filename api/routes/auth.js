const router=require('express').Router()
const User=require('../model/user')
const  Cryptojs=require('crypto-js');
const { json } = require('express');
const jwt=require('jsonwebtoken')
const authController=require('../controller/authController')



//register


router.post('/register',authController.User_register);

//Login


router.post('/login',authController.user_Login )


module.exports=router