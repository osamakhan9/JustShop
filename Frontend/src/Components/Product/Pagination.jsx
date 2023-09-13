import { Button, Center, Container, HStack } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";


export const Pagination=({category})=>{
    const[page,setpage]=useState(1)
    const products=useSelector((state)=>{return state.product.data})
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts(page,category))
    },[page])
    return (
        <Container padding="20px" minW={"100%"}>
            <Center>
           <HStack gap="20px">
           <Button disabled={page==1} onClick={()=>{setpage(prev=>prev-1)}} >Prev</Button>
            <Button>{page}</Button>
            <Button disabled={products.length<9} onClick={()=>{setpage(prev=>prev+1)}}>Next</Button>
           </HStack>

            </Center>
        </Container>
    )
}
