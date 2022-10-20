const ApplicationModel = require('../model/applicationModel')

const router=require('express').Router()

router.get('/applications', (req, res, next) => {
    ApplicationModel.find({}).then((data)=>{
      console.log(data);
      res.json(data);
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })

   })

   router.get('/approve/:id',async (req, res, next) => {
    const id=req.params.id
    ApplicationModel.findOneAndUpdate({_id:id},{$set:{isApproved:true}}).then((data)=>{
      res.json({data:data});
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })

   router.get('/decline/:id',async (req, res, next) => {
    const id=req.params.id
    ApplicationModel.findOneAndUpdate({_id:id},{$set:{isDeclined:true}}).then((data)=>{
      res.json({data:data});
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })

   router.get('/pending/:id',async (req, res, next) => {
    const id=req.params.id
    ApplicationModel.findOneAndUpdate({_id:id},{$set:{isPending:true}}).then((data)=>{
      res.json({data:data});
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })

module.exports=router