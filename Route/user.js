
const express=require('express')
const router=express.Router();
const {createUser,signupUser,getUser}=require('../controller/user')
const{validateToken}=require('../Utils/validation_jwt')

router.post('/create',createUser)
router.post('/signup',signupUser)
router.get('/getuser/:id',validateToken,getUser)

module.exports=router;