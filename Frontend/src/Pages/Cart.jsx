import { Heading, Stack,Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Address from "../Components/Cart/Address";
import CartItem from "../Components/Cart/CartItem";
import Total from "../Components/Cart/Total";
import { getItem } from "../redux/cartSlice";

const Cart=()=>{
    const dispatch=useDispatch();
    const cartData=useSelector(state=>state.cart.data)
    useEffect(()=>{
       dispatch( getItem())
      //  console.log(cartData)

    },[])
    return(
    <Stack direction={{base:"column",md:"row"}} maxW="100vw" overflow={"hidden"} justifyContent="space-between" p="40px">
        <Stack direction={"column"} spacing="20px">
            <Heading fontSize={"19px"} pl="10px" color="rgb(0,18,51)" pb="20px" borderBottom={"2px"} borderBottomColor="rgb(0,18,51)">Your Cart</Heading>
          { cartData?.map((e)=>{
            return <CartItem productid={e.product._id} key={e.product._id} qty={e.qty} id={e._id} title={e.product.title} brand={e.product.brand} category={e.product.category} img={e.product.image} cost={e.product.cost} />
          })}
        {
          cartData?.length==0?<Image src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png"/>:""
        }
        </Stack>

    <Stack direction="column">
        <Address/>
    <Total/>
    </Stack>
    </Stack>)
}

export default Cart;