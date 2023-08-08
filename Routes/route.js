
const route=require("express").Router()

const controller = require("../Controller/action");

route.get("/",controller.allproduct)


module.exports=route;
