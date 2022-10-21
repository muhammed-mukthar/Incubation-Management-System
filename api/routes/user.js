const User = require('../model/user')
const ApplicationModel=require('../model/applicationModel')
const {verifyToken,verifyAdminToken}=require('./verifytoken')
const router=require('express').Router()

const {UploadForm,user_Update,delete_user,get_user,all_user,GetStatus,BlockUser,UnBlockUser}=require('../controller/userController')


/* -------------------------------- //pending ------------------------------- */
//update user
router.put("/:id",verifyAdminToken,user_Update)

//delete

router.delete('/:id',verifyAdminToken,delete_user)

//get user

router.get('/find/:id',verifyAdminToken,get_user)
/* ----------------------------------- jjj ---------------------------------- */
//get all users

router.get('/getusers',verifyAdminToken,all_user)


//form submit

router.post('/upload/:id',verifyToken,UploadForm)

  router.get('/status/:id',verifyToken,GetStatus )
  
   router.get('/block/:id',verifyAdminToken,BlockUser)
   
   router.get('/unblock/:id',verifyAdminToken,UnBlockUser)

module.exports=router