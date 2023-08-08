

const {Store} =require("../dummy data/store")

const allproduct = async (req,res)=>{
    const result= await Store.find()
    res.send(result)
    // res.end()
 }

 module.exports = {allproduct}