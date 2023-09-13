import { Button, HStack, VStack,Stack,Heading,Text,Image,Box, useToast} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CancelOrder } from "../../redux/orderSlice";


const OrderItem=(props)=>{
    const{title,img,cost,category,id,productId,orderId,status}=props
    const[cancel,setcancel]=useState(false)
    const dispatch=useDispatch()
    const toast=useToast()
   return(
    <Stack gap="10px" maxW="400px" p="10px" spacing="0px" direction={"column"} justifyContent={"left"} textAlign="left">
        
        <Box  minW="250px"  minH={"250px"}   maxW="250px"  maxH={"250px"} bgColor={"rgb(240,224,199)"}>
        <Image minW="250px"  minH={"250px"}   maxW="250px"  maxH={"250px"}src={img}/>
        </Box>
        <Heading pt="10px" fontSize={"14px"}>{title}</Heading>
        <Text pt="5px" pb="20px" fontSize={"14px"}>{!category?"Category":category}</Text>
        <Heading  pb="20px" fontSize={"14px"}>{"₹ "+cost}</Heading>
        <Button _hover={{color:"rgb(240,224,199)"}} borderRadius={"0px"} color="rgb(240,224,199)" textTransform={"uppercase"} bgColor="rgb(0,18,51)" m="auto">{status}</Button>
        <Button _hover={{color:"rgb(240,224,199)"}} borderRadius={"0px"}  color="rgb(240,224,199)" bgColor="rgb(0,18,51)" disabled={status=="Cancelled"} onClick={()=>{dispatch(CancelOrder({productId,orderId},toast))}}>Cancel Request</Button>
    </Stack>
   )
}

export default OrderItem;