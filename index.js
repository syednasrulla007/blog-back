const express=require("express");
const route=require("./Routes/route")
const app = express();
const connect=require("./Database/connection")

// app.use(express.json())
const cors=require("cors")
app.use(cors({
    origin:"*"
}))
app.use(route)
app.listen(4065, async ()=>{
    try {
        await connect;
        console.log("server is running");
    } catch (error) {
        console.log(error);
    }
})