const jwt=require('jsonwebtoken')
require('dotenv').config()

const generateToken=async(payload)=>{
    const jweToken=await jwt.sign(payload,process.env.JWT_SIGN)
    return jweToken;
};

const validateToken=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
        const user=jwt.verify(token,process.env.JWT_SIGN)
        req.user=user;
        next();
    }

}
module.exports={
    generateToken,
    validateToken
}