const express=require("express");
const { Authentication } = require("../middleware/Authentication");
const { Addressmodel } = require("../model/address.model");

const addressRoute=express.Router();


//getting address of user

addressRoute.get("/",Authentication,async(req,res)=>{
    const userid=req.body.userid;
    try{
        const address=await Addressmodel.findOne({user:userid});
        if(Object.keys(address).length>0){
            res.status(200).send(address)
        }else{
            res.status(404).send({"msg":"Address not found"})
        }
    }
    catch(err)
    {
        res.status(404).send({"msg":err.message})
    }
})

//new address

addressRoute.post("/",Authentication,async(req,res)=>{
    const userid=req.body.userid;

    try
    {
        const new_Address=await Addressmodel({...req.body,user:userid})
        await new_Address.save()
        res.status(200).send({"msg":"address saved"})
    }
    catch(err){
        res.status(404).send({"msg":err.message})
    }
})

//to update user

addressRoute.patch("/",Authentication,async(req,res)=>{
    const userid=req.body.userid;
    try{
       await Addressmodel.findOneAndUpdate({user:userid},{...req.body})
       res.status(200).send({"msg":"Updated Successfully"})
    }catch(err){
        res.status(404).send({"msg":err.message})
    }
})

module.exports={addressRoute}