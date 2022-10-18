const express = require("express");
const dotenv=require('dotenv')
const app = express();
const logger = require("morgan");
const mongoose=require('mongoose')
const cors = require("cors");
const authRouter=require('./routes/auth')
const userRouter=require('./routes/user')
const adminRouter=require('./routes/admin')

dotenv.config()

mongoose.connect(
    process.env.MONGO_URL
    ).then(()=>console.log('db connection is succesffull'))
    .catch((err)=>console.log(err)
)

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/admin',adminRouter)


app.use(logger("dev"));

app.listen(process.env.PORT||5000,()=>{`port running on ${process.env.PORT}`})