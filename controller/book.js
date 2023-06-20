const Books=require('../module/bookmodel');


//book model created

const createBook=async(req,res)=>{
    const book=await new Books(req.body)
    await book.save();
    res.status(201).send(book)

};

const getBook = async(req,res) => {
    const book = await Books.findById(req.params.id).populate('user')
    res.send(book)
}
module.exports={createBook, getBook}