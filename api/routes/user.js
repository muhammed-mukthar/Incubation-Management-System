const User = require('../model/user')
const ApplicationModel=require('../model/applicationModel')
const {verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin}=require('./verifytoken')
const userController=require('../controller/userController')
const router=require('express').Router()


//update user
router.put("/:id",verifyTokenandAuthorization,userController.user_Update)

//delete

router.delete('/:id',verifyTokenandAuthorization,userController.delete_user)

//get user

router.get('/find/:id',verifyTokenandAdmin,userController.get_user)

//get all users

router.get('/getusers',verifyTokenandAdmin,userController.all_user)


//form submit

router.post('/upload/:id',function(req, res, next){
    const userId=req.params.id
    req.body.userId=userId
  
    ApplicationModel.create(req.body).then((response)=>{
      User.findOneAndUpdate({_id:userId},{$set:{isRegistered:true}}).then((data)=>{
        data.isRegistered=true
        res.json(data)
      }).catch((err)=>{
        res.json(err)
      })
    }).catch((err)=>{
      res.json(err)
    })
  })
  

module.exports=router