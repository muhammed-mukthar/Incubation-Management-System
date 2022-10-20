const mongoose=require('mongoose')

const SlotSchema=new mongoose.Schema({
    A:{
        type:Array,
    },
    B:{
        type:Array,
    },
    C:{
        type:Array,
    },
    D:{
        type:Array,
    },
    E:{
        type:Array,
    },
    F:{
        type:Array,
    }
})

const SlotModel=mongoose.model('slots',SlotSchema)

module.exports=SlotModel;