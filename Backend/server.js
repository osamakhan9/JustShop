const express=require("express");
const connectDatabase=require("./config/db");
const { productRouter } = require("./routes/product.route");
const { userRoute } = require("./routes/user.route");
require("dotenv").config()
const app=express();
const PORT=process.env.PORT||8080
const cors =require("cors")
const mongoose=require("mongoose");
const { addressRoute } = require("./routes/address.route");
const { cartRoute } = require("./routes/cart.route");
const { application } = require("express");
const { orderRoute } = require("./routes/order.route");
const { adminRoute } = require("./routes/admin.route");

app.use(cors())
app.use(express.json())
app.use("/user",userRoute)  

app.use("/product",productRouter)

app.use("/address",addressRoute)  

app.use("/cart",cartRoute)

app.use("/order",orderRoute)
app.use("/admin",adminRoute)



app.get("/", (req, res) => {
	res.send("Welcome to My Server ");
  });




app.listen(PORT,async()=>{
    console.log(`listen at http://localhost:${PORT}`);
    try{
       await connectDatabase()
        console.log("DB Connected")
    }catch(err){
        console.log("DB NOT CONNECTED"+err.message)
    }

})