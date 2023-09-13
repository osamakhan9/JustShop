
import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./userSlice";

const initialState={cart:[],user:[],order:[],product:[],refund:[],recentuser:[]}
const adminSlice=createSlice({
    name:'admin',
    initialState,
    reducers:{
        setAdminData(state,action){
            return {...state,refund:action.payload.allrefund||[],product:action.payload.allproduct,cart:action.payload.allcart,user:action.payload.alluser,order:action.payload.allorder}
        }
    }
})

export const {setAdminData} = adminSlice.actions;

export default adminSlice.reducer;



//get adminData
export const getAdminData=()=>{
    return async (dispatch,getState)=>{
        const userId=localStorage.getItem("TOKEN")
            try{
                const resp=await fetch("https://justshop.onrender.com/admin/admindata",{
                    method:"GET",
                    headers:{"Content-type":"application/json","authorization":`bearer ${userId}`},
                });
                const data=await resp.json();
                dispatch(setAdminData(data))
                console.log(data)
                if(resp.status!==200){
                    dispatch(logout())
                }
            }
            catch(err){
                alert(err.message)
             
            }
    }
}

//Role Switch

export const roleSwitch=(id,toast)=>{
    return async(dispatch,getState)=>{
        const userId=localStorage.getItem("TOKEN");
        try{
            const resp=await fetch(`https://justshop.onrender.com/admin/user/${id}`,{
                method:"PATCH",
                headers:{"Content-type":"application/json","authorization":`bearer ${userId}`},
            });
            toast({
                title: 'Role Updated',
             
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            dispatch(getAdminData())
        }catch(err){
            console.log(err.message)
            toast({
                title: "Role Coudn't be Update",
             
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    }
}

//delete cart item

export const deleteCartItem=(id,toast)=>{
    return async(dispatch,getState)=>{
        const userId=localStorage.getItem("TOKEN")
        try{
            const resp=await fetch(`https://justshop.onrender.com/admin/cart/${id}`,{
                method:"DELETE",
                headers:{"Content-type":"application/json","authorization":`bearer ${userId}`},
            });
            toast({
                title: 'Item Deleted',
             
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            dispatch(getAdminData())
        }
        catch(err){
            console.log(err.message)
        }
    }
}

//delete User

export const deleteUser=(id,toast)=>{
    return async(dispatch,getState)=>{
        const userId=localStorage.getItem("TOKEN")
        try{
            const resp=await fetch(`https://justshop.onrender.com/admin/user/${id}`,{
                method:"DELETE",
                headers:{"Content-type":"application/json","authorization":`bearer ${userId}`},
            });
            toast({
                title: 'User Deleted',
             
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            dispatch(getAdminData())
        }
        catch(err){
            console.log(err.message)
        }
    }
}

//delete Product

export const deleteProduct=(id,toast)=>{
    return async(dispatch,getState)=>{
        const userId=localStorage.getItem("TOKEN")
        try{
            const resp=await fetch(`https://justshop.onrender.com/admin/product/${id}`,{
                method:"DELETE",
                headers:{"Content-type":"application/json","authorization":`bearer ${userId}`},
            });
            toast({
                title: 'Product Deleted Successfully',
             
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            dispatch(getAdminData())
        }
        catch(err){
            console.log(err.message)
        }
    }
}

//delete Order

export const deleteOrder=(id,toast)=>{
    return async(dispatch,getState)=>{
        const userId=localStorage.getItem("TOKEN")
        try{
            const resp=await fetch(`https://justshop.onrender.com/admin/order/${id}`,{
                method:"DELETE",
                headers:{"Content-type":"application/json","authorization":`bearer ${userId}`},
            });
            toast({
                title: 'Order Deleted Successfully',
             
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            dispatch(getAdminData())
        }
        catch(err){
            console.log(err.message)
        }
    }
}

//Update Order Status

export const updateOrderStatus=(id,data,toast)=>{
    return async(dispatch,getState)=>{
        const userId=localStorage.getItem("TOKEN")
       
        try{
            const resp=await fetch(`https://justshop.onrender.com/admin/order/${id}`,{
                method:"PATCH",

                headers:{"Content-type":"application/json","authorization":`bearer ${userId}`},
                body:JSON.stringify({status:data})
            });
            dispatch(getAdminData())
            toast({
                title: 'Order Status Updated',
             
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        }
        catch(err){
            console.log(err.message)
        }
    }
}


// add item


export function AddProduct(data,toast){
    return async function (dispatch,getState){
        const userId=localStorage.getItem("TOKEN")
          try{
            const sendData=await fetch("https://justshop.onrender.com/admin/product",{
                method:"POST",
                headers:{"content-type":"application/json",
                "authorization":`bearer ${userId}`},
                body:JSON.stringify(data)
            })
            const resp=await sendData.json();
            toast({
                title: 'Product Added successfully',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            dispatch(getAdminData())
           
          }catch(err){
            console.log("err",err)
          }
    }
}


