import { Button, Heading, HStack, Stack, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Order } from "../../redux/cartSlice";

const Total=()=>{
const state=useSelector(state=>state.cart.data);
const [total,settotal]=useState(0)
const toast=useToast()
const totalData=()=>{
    let data=0
        state.forEach(e => {
            data+=(e.qty*e.product.cost)  
        });

        settotal(data)
}
const dispatch=useDispatch()

useEffect(()=>{
    totalData()
},[state])

    return(
        <Stack hidden={state.length==0} direction={"column"} bgColor={"rgb(249,243,234)"} minW={{base:"",md:"400px"}} maxW="100vw" p="20px" gap="20px" maxH="400px">
            <Heading color="rgb(0,18,51)" fontSize="22px">Summary</Heading>
           <Stack direction={"column"}>
           <HStack minW={"full"} justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text>₹ {total}</Text>
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>Shipping Discount</Text>
                <Text>₹ 0.00</Text>
            </HStack>
            <HStack minW={"full"} justifyContent="space-between"> 
                <Text>Tax (Calculated at checkout 17%)</Text>
                <Text>₹ {(total*17)/100}</Text>
            </HStack>
           </Stack>
           <HStack minW={"full"} justifyContent="space-between">
                <Heading fontSize="22px">Balance</Heading>
                <Heading fontSize="22px">₹ {((total*17)/100)+total} </Heading>
           </HStack>

           <Button color="rgb(249,243,234)" bgColor={"rgb(0,18,51)"} onClick={()=>{dispatch(Order(toast))}}>Checkout</Button>
            
        </Stack>
    )
}

export default Total