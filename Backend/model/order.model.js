const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
    product:{type:mongoose.Types.ObjectId,ref:"product",required:true},
    user:{type:mongoose.Types.ObjectId,ref:"user",required:true},
    status:{type:String,default:"Pending"},
    date:{type:Date,default:Date.now()}
})

const Ordermodel=mongoose.model("order",orderSchema);

module.exports={Ordermodel}