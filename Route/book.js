const express=require('express')
const router = express.Router()
const {createBook, getBook}=require('../controller/book')

router.post('/create',createBook);
router.get('/getbook/:id', getBook)

module.exports=router