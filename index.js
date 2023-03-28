const express=require('express')
const mongoose=require('mongoose')
const app=express();
const route= require('./routes/route');
const dotenv=require('dotenv')

dotenv.config()

app.use(express.json());

mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true}
).then(()=>console.log("MongoDb is connected"))
.catch((err)=>console.log(err));

app.use('/',route);

app.listen(process.env.PORT || 3000,function(){
    console.log("Express app running on port"+(process.env.PORT || 3000))
})