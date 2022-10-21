const User = require('../model/user')
const ApplicationModel=require('../model/applicationModel')
const {verifyToken,verifyAdminToken}=require('./verifytoken')
const userController=require('../controller/userController')
const router=require('express').Router()

/* -------------------------------- //pending ------------------------------- */
//update user
router.put("/:id",verifyAdminToken,userController.user_Update)

//delete

router.delete('/:id',verifyAdminToken,userController.delete_user)

//get user

router.get('/find/:id',verifyAdminToken,userController.get_user)
/* ----------------------------------- jjj ---------------------------------- */
//get all users

router.get('/getusers',verifyAdminToken,userController.all_user)


//form submit

router.post('/upload/:id',verifyToken,function(req, res, next){
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

  router.get('/status/:id',verifyToken, (req, res, next) => {
    let userId=req.params.id
    ApplicationModel.findOne({userId:userId}).then((data)=>{
      res.json(data);
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })
  
   router.get('/block/:id',verifyAdminToken,async (req, res, next) => {
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
   
   router.get('/unblock/:id',verifyAdminToken,async (req, res, next) => {
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