const express=require('express');
const app=express();
const port=9000;
const mongoose=require('mongoose')
const userRouter=require('./Route/user')
const bookRouter = require('./Route/book')
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/AuthencationTask1',{
    useNewUrlParser:true
}).then(()=>{
    console.log("DB Connected")
}).catch((e)=>{
console.log(e)
})

  app.use('/user',userRouter)
  app.use('/book', bookRouter)

app.listen(port,()=>{
console.log(`server is running on ${port}`)
})