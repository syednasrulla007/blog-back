const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true,
    },
    imageurl:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    }
    
}) 

const Store = mongoose.model("Store",movieSchema);

module.exports = {Store};