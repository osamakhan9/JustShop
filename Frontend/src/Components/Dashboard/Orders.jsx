import { Center, Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../Product/ProductItem";
import OrderItem from "./OrderItem";

export const Orders=()=>{
    const state=useSelector((state)=>state.order.data);

  
    return (
        <Container minW="100vw">
            <SimpleGrid justifyItems={"center"}  columns={{base:1,md:3}} p="20px" gap="10px" justifyContent={"center"}>
             
               {
                    state?.map((el)=>{
                        return <OrderItem img={el.product.image} status={el.status} productId={el.product._id} orderId={el._id} title={el.product.title} cost={el.product.cost}/>
                    })
                }
         

           
            </SimpleGrid>
        </Container>
    )
}