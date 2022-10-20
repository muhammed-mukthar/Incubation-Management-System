const ApplicationModel = require('../model/applicationModel')
const Slot=require('../model/Slots')

const router=require('express').Router()

router.get('/applications', (req, res, next) => {
    ApplicationModel.find({}).then((data)=>{
      console.log(data,'fdfsds');
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

   router.get('/approved',async (req,res)=>{
    ApplicationModel.find({isApproved:true}).then((data)=>{
        res.json({info:data})
    }).catch((err)=>{
    res.json(err)
    })
   })

   router.post('/booking/:id',async (req, res, next) => {
      let appId=req.params.id
      let {val, index}=req.body
      let char=val[index].slot
      ApplicationModel.findOneAndUpdate({_id:appId},{$set:{isBooked:true, slotId:char}}).then((data)=>{
        data.isBooked=true
        data.slotId=char
        res.json({data});
     }).catch((err)=>{
      console.log(err);
         err='Something went wrong!'
        res.json({err:err});
     })
     })
  
     router.get('/slots',async (req, res, next) => {
      Slot.find().then((response)=>{
        console.log(response,'fsfssf');
         res.json(response[0]);
       }).catch((err)=>{
      console.log(err);
         err='Something went wrong!'
        res.json({err:err});
     })
     })
  

module.exports=router