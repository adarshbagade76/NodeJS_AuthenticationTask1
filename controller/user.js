const UserModel=require('../module/user_model')
const { generateToken, validateToken}=require('../Utils/validation_jwt')

//created User Data 
const createUser=async (req,res)=>{
  const user= await new UserModel(req.body)
  await user.save();
  res.status(201).send(user);

};


// signup up with token
const signupUser=async(req,res)=>{
    const payload=req.body;
    const token=await generateToken(payload)
    res.send(token)

}

//getting object using Id
const getUser=async(req,res)=>{
    const reqId=req.params.id
    const id=await UserModel.findById(reqId)
    res.status(200).send(id)
}





module.exports={
    createUser,
    signupUser,
    getUser
}
