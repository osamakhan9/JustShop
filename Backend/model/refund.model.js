const mongoose=require("mongoose");

const refundSchema=mongoose.Schema({
    product:{type:mongoose.Types.ObjectId,ref:"product",required:true},
    user:{type:mongoose.Types.ObjectId,ref:"user",required:true},
    status:{type:String,default:"Pending"},
    order:{type:mongoose.Types.ObjectId,ref:"order",required:true},
    date:{type:Date,default:Date.now()}
})

const Refundmodel=mongoose.model("refund",refundSchema);

module.exports={Refundmodel}