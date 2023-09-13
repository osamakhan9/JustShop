import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Button,
    useToast
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../../redux/adminSlice";
export const Cart=()=>{
  const dispatch=useDispatch()
  const toast=useToast()
  const cartData=useSelector((state)=>state.admin.cart)

  // console.log(cartData +"hellodata")
    return(
        <Stack direction={"column"} p="20px" minW={"80%"}>
        <TableContainer>
<Table size='sm' color={"white"}>
<Thead>
  <Tr bgColor={"white"}>
    <Th >Product</Th>
    <Th>User</Th>
    <Th >Quantity</Th>
    <Th >Remove</Th>
  </Tr>
</Thead>
<Tbody>
{
    cartData?.map(e=>{
    console.log(e + "hello data")
      return(
        <Tr>
        <Td>{e.product.title}</Td>
        <Td>{e.user.name}</Td>
        <Td >{e.qty}</Td>
        <Td><Button bgColor="rgb(0,18,51)" onClick={()=>{dispatch(deleteCartItem(e._id,toast))}} color="rgb(255,225,189)">Remove</Button></Td>
      </Tr>
     
      )
    })
  }
</Tbody>

</Table>
</TableContainer>
    </Stack>
    )
}