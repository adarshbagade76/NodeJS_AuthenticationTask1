const mongoose=require('mongoose')

const Books=new mongoose.Schema(
    {
  
    title:{
        type:String,
        required:true
    },
    Publish:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}
)

const book= mongoose.model('Book',Books)

module.exports=book