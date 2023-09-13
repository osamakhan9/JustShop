import { createSlice } from "@reduxjs/toolkit";

const userAuth=localStorage.getItem("TOKEN")
const initialState={auth:userAuth?true:false,role:localStorage.getItem("role")||"user",signup:false}

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        logout(state,action){
            localStorage.removeItem("TOKEN");
            localStorage.removeItem("role")
            return {...state,auth:false,role:"None"}
        },
        loginSuccess(state,action){
            return {...state,auth:true,role:action.payload}
        },
        loginFailed(state,action){
            localStorage.removeItem("TOKEN")
            return {...state,auth:false}
        },
        signupSuccess(state,action){
            return {...state,signup:true}
        },
        signupFailure(state,action){
            return {...state,signup:"error"}
        },
        
    },
})

export const {loginFailed,loginSuccess,signupFailure,logout}=userSlice.actions

export default userSlice.reducer

export function loginUser(data,toast){
    return async function (dispatch,getState){
          try{
            const sendData=await fetch("https://justshop.onrender.com/user/login",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })
            const resp=await sendData.json();
            if(resp?.token?.length>10){
                localStorage.setItem("TOKEN",resp.token)
                toast({
                    title: 'Login Success',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                localStorage.setItem("role",resp?.role)
                dispatch(loginSuccess(resp.role))
            }else{
                toast({
                    title: 'Login Failed',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
                dispatch(loginFailed())
            }
            
          }catch(err){
            toast({
                title: 'Login Failed',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
           dispatch(loginFailed())
          }
    }
}

export function signupUser(data,toast){
    return async function (dispatch,getState){
          try{
            const sendData=await fetch("https://justshop.onrender.com/user/signup",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })
            const resp=await sendData.json();
            console.log(resp)
            toast({
                title: 'SignUp Successfull',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
          }catch(err){
            toast({
                title: 'Signup Failed',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
           dispatch(signupFailure())
          }
    }
}


