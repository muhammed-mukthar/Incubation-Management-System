const User = require('../model/user')
const ApplicationModel=require('../model/applicationModel')
const {verifyToken}=require('./verifytoken')
const userController=require('../controller/userController')
const router=require('express').Router()


//update user
router.put("/:id",userController.user_Update)

//delete

router.delete('/:id',userController.delete_user)

//get user

router.get('/find/:id',userController.get_user)

//get all users

router.get('/getusers',userController.all_user)


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

  router.get('/status/:id', (req, res, next) => {
    let userId=req.params.id
    ApplicationModel.findOne({userId:userId}).then((data)=>{
      res.json(data);
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })
  
   router.get('/block/:id',async (req, res, next) => {
    let userId=req.params.id
    User.findOneAndUpdate({_id:userId},{$set:{isBlocked:true}}).then((users)=>{
      users.isBlocked=true
      res.json({users:users});
   }).catch((err)=>{
    console.log(err);
       err='Something went wrong!'
      res.json({err:err});
   })
   })
   
   router.get('/unblock/:id',async (req, res, next) => {
    let userId=req.params.id
    User.findOneAndUpdate({_id:userId},{$set:{isBlocked:false}}).then((users)=>{
      users.isBlocked=false
      res.json({users:users});
   }).catch((err)=>{
    console.log(err);
       err='Something went wrong!'
      res.json({err:err});
   })
   })

module.exports=router