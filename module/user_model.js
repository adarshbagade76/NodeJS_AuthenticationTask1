const mongoose=require('mongoose')

const UserModel=new mongoose.Schema({
   Name:{
    type:String,
    required:true
   },
   Location:{
    type:String,
    required:true
   },
   Number:{
    type:String,
    required:true
   },
   Email:{
    type:String,
    required:true
   },
   Password:{
    type:String,
    required:true
   }

})
const user=mongoose.model('User',UserModel)

module.exports=user;