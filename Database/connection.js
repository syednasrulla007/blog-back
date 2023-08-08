

const mongoose = require("mongoose");

mongoose.set("strictQuery",true);

const connection = mongoose.connect("mongodb+srv://syednasrulla085:snasrulla@blog-back.7fokxqn.mongodb.net/?retryWrites=true&w=majority")
console.log("connected to database")
module.exports= connection;