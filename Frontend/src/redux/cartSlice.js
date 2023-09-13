import { useToast } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";

const initialState={data:[],address:{}};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(-1)
        }
,
        getCartItem(state,action){
            return {...state,data:action.payload}
        }
        ,
        saveAddress(state,action){
            return {...state,address:action.payload}
        }
    }
})

export const {add,getCartItem,saveAddress} = cartSlice.actions;

export default cartSlice.reducer;


//Adding item to cart
export const addItem=(productid,toast,status)=>{
  
    return async(dispatch,getState)=>{
            const userId=localStorage.getItem("TOKEN");
            if(userId?.length>10){
                const resp=await fetch("https://justshop.onrender.com/cart",{
                    method:"POST",
                    headers:{"Content-type":"application/json","authorization":`bearer ${userId}`},
                    body:JSON.stringify({product:productid})
                })
                const data=await resp.json();
                dispatch(getItem())
                if(resp.status==200){
                    toast({
                        title: 'Item Added to Cart',
                     
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })
                    status(true)
                }else{
                    toast({
                        title: 'Item already in cart',
                     
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      })
                }
               
            }else{
              
                toast({
                    title: 'Login Required',
                 
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
    }
}

//order success
export const Order=(toast)=>{
    return async(dispatch,getState)=>{
        const userId=localStorage.getItem("TOKEN");
        if(userId?.length>10){
            const resp=await fetch("https://justshop.onrender.com/order",{
                method:"POST",
                headers:{"authorization":`bearer ${userId}`},
            
            })
            const data=await resp.json();
            toast({
                title: 'Order Placed Successfully',
             
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            dispatch(getItem())
        }else{
            alert("Login to add Item To Cart")
        }
}
}

//get Cart Item 
export const getItem=()=>{
    return async(dispatch,getState)=>{
            const userId=localStorage.getItem("TOKEN");
            if(userId?.length>10){
                const resp=await fetch("https://justshop.onrender.com/cart",{
                    method:"GET",
                    headers:{"authorization":`bearer ${userId}`},
                
                })
                const data=await resp.json();
            
                dispatch(getCartItem(data||[]))
                console.log(data)
            }else{
                alert("Login to add Item To Cart")
            }
    }
}


//increase Quanitity;

export const IncreaseQty=(cartId,qty)=>{
    return async(dispatch,getState)=>{
        const user=localStorage.getItem("TOKEN");
        const newData=getState();

        const UpdatedData=newData.cart.data.map(e=>{
            if(e._id==cartId){
                return {...e,qty:e.qty+1}
            }else{
                return e
            }
        })
    console.log("uPDATED DATA"+UpdatedData,"NEWDATA"+newData)
        dispatch(getCartItem(UpdatedData||[]))
        const resp=await fetch(`https://justshop.onrender.com/cart/${cartId}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${user}`
            },
            body:JSON.stringify({qty})
        })

        const data=await resp.json();
        console.log(data)
      
    }
}


//decrease Quantitiy


export const DecreaseQty=(cartId,qty)=>{
    return async(dispatch,getState)=>{
        const user=localStorage.getItem("TOKEN");
        const newData=getState();

        const UpdatedData=newData.cart.data.map(e=>{
            if(e._id==cartId){
                return {...e,qty:e.qty-1}
            }else{
                return e
            }
        })
    console.log("uPDATED DATA"+UpdatedData,"NEWDATA"+newData)
        dispatch(getCartItem(UpdatedData||[]))
        const resp=await fetch(`https://justshop.onrender.com/cart/${cartId}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${user}`
            },
            body:JSON.stringify({qty})
        })

        const data=await resp.json();
        console.log(data)
      
    }
}



//Add Address of Specific User

export const AddAddress=(data,toast)=>{
    return async(dispatch,getState)=>{
        const user=localStorage.getItem("TOKEN");
        const resp=await fetch(`https://justshop.onrender.com/address`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${user}`
            },
            body:JSON.stringify(data)
        })

        const NewData=await resp.json();
        toast({
            title: 'Address Added Successfully',
         
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        console.log(NewData)
    }
}


//Get Address of Specific User

export const GetAddress=()=>{
    return async(disptach,getState)=>{
        const user=localStorage.getItem("TOKEN");
        const resp=await fetch(`https://justshop.onrender.com/address`,{
            method:"GET",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${user}`
            }
        })

        const parsedData=await resp.json();
        console.log(parsedData)

        if(parsedData?.fullname?.length>0){
            disptach(saveAddress(parsedData))
        }
    }
}


//Update Address of Specific User

export const UpdateAddress=(data,toast)=>{
    return async(dispatch,getState)=>{
        const user=localStorage.getItem("TOKEN");
        const resp=await fetch(`https://justshop.onrender.com/address`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${user}`
            },
            body:JSON.stringify(data)
        })
         toast({
                    title: 'Address Updated',
                 
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })

        const NewData=await resp.json();
        dispatch(GetAddress())
      
    }
}


// Delete Cart Item of Specific User

export const RemoveCartItem=(id,toast)=>{
    return async(dispatch,getState)=>{
        const user=localStorage.getItem("TOKEN");
        const resp=await fetch(`https://justshop.onrender.com/cart/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${user}`
            }
        })
        toast({
            title: 'Item Removed',
         
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        dispatch(getItem())
    }
}