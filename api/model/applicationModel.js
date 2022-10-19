const mongoose=require('mongoose')

const ApplicationSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    phone:{
        type:Number,
        required: [true, "Phone is required"],
    },
    email:{
        type:String,
        required:[true, "Email is required"],
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required: true,
    },
    state:{
        type:String,
        required: true,
    },
    company_name:{
        type:String,
        required: true,
    },
    
    team_and_bg:{
        type:String,
        required: true,
    },
    company_and_products:{
        type:String,
        required: true,
    },
    problem:{
        type:String,
        required: true,
    },
    solution:{
        type:String,
        required: true,
    },
    value_proposition:{
        type:String,
        required: true,
    },
    competitive_advantage:{
        type:String,
        required: true,
    },
    revenue_model:{
        type:String,
        required: true,
    },
    market_size:{
        type:String,
        required: true,
    },
    market_plan:{
        type:String,
        required: true,
    },
    incubation_type:{
        type:String,
        required: true,
    },
    proposal:{
        type:String,
        required: true,
    },
    isPending:{
        type:Boolean,
        default: false,
    },
    isApproved:{
        type:Boolean,
        default: false,
    },
    isBooked:{
        type:Boolean,
        default: false,
    },
    isDeclined:{
        type:Boolean,
        default: false,
    },
    slotId:{
        type:String,
        default: 'none',
    },
    Updated:{
        type:Date,
        default: new Date(),
    }
})

const ApplicationModel=mongoose.model('application', ApplicationSchema)

module.exports=ApplicationModel;

// company_logo:{
//     type:String,
//     required: true,
// },