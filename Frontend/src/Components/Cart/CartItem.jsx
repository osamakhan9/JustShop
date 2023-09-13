import { Box, Heading, HStack, Img, Stack, Text,Button, useToast} from "@chakra-ui/react";
import React from "react";
import {MdAdd} from "react-icons/md"
import {BiMinus} from 'react-icons/bi'
import {RxCross2} from "react-icons/rx"

import { DecreaseQty, IncreaseQty, RemoveCartItem} from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const CartItem=(props)=>{
    const{title,img,cost,category,id,qty,productid}=props
    const dispatch=useDispatch()
    const toast=useToast()
    
    const increaseQty=()=>{
        let newQty=qty+1
            dispatch(IncreaseQty(id,newQty))
    }

    const decreaseQty=()=>{
        const newQty=qty-1
        dispatch(DecreaseQty(id,newQty))
    }
    const RemoveCart=(id)=>{
        dispatch(RemoveCartItem(id,toast))
    }
    return(<Stack  maxW={{base:"100%",md:"630px"}} direction={{base:"column",md:"row"}} p="10px" pb="20px" borderBottom={"1px"} borderBottomColor="rgb(214,217,222)">
            <Box bgColor={"rgb(239,224,202)"} maxW="300px"><Img maxW={{base:"100%",md:"200px" }}src={img}/></Box>
            <Stack justifyContent={"space-between"} minW="400px">
                <HStack alignContent={"center"}  justifyContent={"space-between"} maxW={{base:"250px",md:"100%"}}>
                    <Stack direction={"column"}>
                        <Heading color="rgb(0,18,51)" fontSize={"22px"} fontWeight="400">{title}</Heading>
                        <Text>{category?category:"Category"}</Text>
                    </Stack>
                    <RxCross2 cursor={"pointer"} onClick={()=>{RemoveCart(productid)}} color="rgb(0,18,51)"/>
                </HStack>
                <HStack justifyContent={"space-between"} maxW={{base:"250px",md:"100%"}}>
                    <HStack p="5px" minW={"100px"} justifyContent="space-around" border={"2px"} borderColor="rgb(0,18,51)">
                        <Button disabled={qty==1} onClick={decreaseQty}><BiMinus/></Button>
                        <Heading fontSize={"17px"} fontWeight="400">{qty}</Heading>
                       <Button onClick={increaseQty}> <MdAdd/></Button>
                    </HStack>
                    <Heading fontSize={"22px"} color="rgb(0,18,51)" fontWeight="400">₹ {(cost*qty)}</Heading>
                </HStack>
            </Stack>
    </Stack>)
}

export default CartItem