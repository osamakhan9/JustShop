const express=require("express");
const { Authentication } = require("../middleware/Authentication");
const { Cartmodel } = require("../model/cart.model");
const { Ordermodel } = require("../model/order.model");
const { Productmodel } = require("../model/product.model");
const { Refundmodel } = require("../model/refund.model");
const { Usermodel } = require("../model/user.model");

const adminRoute=express.Router();

//get count of all products

adminRoute.get("/product/count",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                const productcount=await Productmodel.countDocuments();
                res.status(200).send({count:productcount})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})


//get count of all cart item

adminRoute.get("/cart/count",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                const cartcount=await Cartmodel.countDocuments();
                res.status(200).send({count:cartcount})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})
//get count of orders

adminRoute.get("/order/count",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                const productcount=await Ordermodel.countDocuments()
                res.status(200).send({count:productcount})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})


//get count of all users

adminRoute.get("/user/count",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                const productcount=await Usermodel.countDocuments();
                res.status(200).send({count:productcount})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})


//get all users

adminRoute.get("/user/all",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                const alluser=await Usermodel.find();
                res.status(200).send(alluser)
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})

adminRoute.get("/admindata",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                const allproduct=await Productmodel.find();
                const allcart=await Cartmodel.find().populate("user").populate("product");
                const allorder=await Ordermodel.find().populate("user").populate("product");
                const alluser=await Usermodel.find()
                const allrefund=await Refundmodel.find().populate("user").populate("order").populate("product")
       
                res.status(200).send({
                    allcart,allorder,allproduct,alluser,allrefund
                })
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})

//get all products

adminRoute.get("/product/all",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                const allproduct=await Productmodel.find();
                res.status(200).send(allproduct)
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})

//get all cart

adminRoute.get("/cart/all",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid})
        if(user?._id){
            if(user?.role=="admin"){
                const allorder=await Cartmodel.find().populate("product").populate("user");;
                res.status(200).send(allorder)
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})


//delete cart item
adminRoute.delete("/cart/:productid",Authentication,async(req,res)=>{
    const userid=req.body.userid
    const productid=req.params.productid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                await Cartmodel.findOneAndDelete({_id:productid})
                res.status(200).send({msg:"Delete Successfully"})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})


//delete product

adminRoute.delete("/product/:productid",Authentication,async(req,res)=>{
    const userid=req.body.userid
    const productid=req.params.productid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                await Productmodel.findOneAndDelete({_id:productid})
                res.status(200).send({msg:"Delete Successfully"})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})


//delete user

adminRoute.delete("/user/:userid2",Authentication,async(req,res)=>{
    const userid=req.body.userid
    const userid2=req.params.userid2

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                await Usermodel.findOneAndDelete({_id:userid2})
                res.status(200).send({msg:"Delete Successfully"})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})

//role switcher

adminRoute.patch("/user/:userid2",Authentication,async(req,res)=>{
    const userid=req.body.userid
    const userid2=req.params.userid2

    try{
        const user=await Usermodel.findOne({_id:userid});
        const seconduser=await Usermodel.findOne({_id:userid2})
        if(user?._id){
            if(user?.role=="admin"){
                const update_role=seconduser.role=="admin"?"user":"admin"
                await Usermodel.findOneAndUpdate({_id:userid2},{role:update_role})
                res.status(200).send({msg:"He's Admin Now"})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})

//Add Product

adminRoute.post("/product",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
      
        if(user?._id){
            if(user?.role=="admin"){
                const data=await Productmodel({...req.body})
                await data.save();
                res.status(200).send({msg:"Product Added Successfully"})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})


//limited users

adminRoute.get("/user/limit",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                const alluser=await Usermodel.find().limit(6);
                res.status(200).send(alluser)
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})

//delete Order item
adminRoute.delete("/order/:orderID",Authentication,async(req,res)=>{
    const userid=req.body.userid
    const productid=req.params.orderID

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                await Ordermodel.findOneAndDelete({_id:productid})
                res.status(200).send({msg:"Delete Successfully"})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})



adminRoute.patch("/order/:OrderId",Authentication,async(req,res)=>{
    const userid=req.body.userid
    const Orderid=req.params.OrderId
    const status=req.body.status

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
               const orderStatus=await Ordermodel.findOneAndUpdate({_id:Orderid},{status:status});
               res.status(200).send({msg:"Order Status Updated"})
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})


//Get refund


adminRoute.get("/refund",Authentication,async(req,res)=>{
    const userid=req.body.userid

    try{
        const user=await Usermodel.findOne({_id:userid});
        if(user?._id){
            if(user?.role=="admin"){
                const alldata=await Refundmodel.find().populate("user").populate("order").populate("product")
                res.status(200).send(alldata)
            }else{
                res.status(404).send({"msg":"Not authenticated"})
            }
        }else{
            res.status(404).send({"msg":"Not authenticated"})
        }
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})



module.exports={adminRoute}