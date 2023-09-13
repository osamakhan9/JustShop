import { createSlice } from "@reduxjs/toolkit";



const initialState={data:[]}

const orderSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        getOrders(state,action){
            return {...state,data:action.payload}
        }
    }

})

export const {getOrders} = orderSlice.actions;

export default orderSlice.reducer;

export const getMyOrders=()=>{
    return async(dispatch,state)=>{
        const token=localStorage.getItem("TOKEN");

        const resp=await fetch("https://justshop.onrender.com/order",{
            method:"GET",
            headers:{
                    "authorization":`bearer ${token}`
            }
        })

        const data=await resp.json();
        console.log(data)
        dispatch(getOrders(data))
       
    }
}



// Cancel Request Add


export function CancelOrder(data,toast){
    return async function (dispatch,getState){
        const userId=localStorage.getItem("TOKEN")
          try{
            const sendData=await fetch("https://justshop.onrender.com/product/refund",{
                method:"POST",
                headers:{"content-type":"application/json",
                "authorization":`bearer ${userId}`},
                body:JSON.stringify(data)
            })
            const resp=await sendData.json();
            toast({
                title: 'Cancel Requested',
             
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
          }catch(err){
            console.log("err",err)
          }
    }
}

