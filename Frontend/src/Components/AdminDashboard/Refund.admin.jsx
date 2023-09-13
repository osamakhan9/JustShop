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
    Select,
    useToast
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, updateOrderStatus } from "../../redux/adminSlice";
export const Refund=()=>{
  const refundData=useSelector((state)=>state.admin.refund)
  const dispatch=useDispatch()
  const toast=useToast()
    return(
        <Stack direction={"column"} p="20px" minW={"80%"}>
        <TableContainer>
<Table size='sm' color={"white"}>
<Thead>
  <Tr bgColor={"white"}>
    <Th >Product</Th>
    <Th>User</Th>
 
    <Th >Status</Th>
  </Tr>
</Thead>
<Tbody>
{
    refundData?.map(e=>{
      return(
      e._id && e?.product?._id && e?.user?._id && e?.order?._id?(
        <Tr>
        <Td>{e?.product?.title}</Td>
        <Td>{e?.user?.name}</Td>

        <Td><Button bgColor="rgb(0,18,51)" color="rgb(255,225,189)" disabled={e?.order?.status=="Cancelled"} onClick={()=>{dispatch(updateOrderStatus(e?.order?._id,"Cancelled",toast))}}>{e?.order?.status=="Cancelled"?"Order Cancelled":"Accept Cancel Request"}</Button></Td>
      </Tr>
      ):""

     
      )
    })
  }
</Tbody>

</Table>
</TableContainer>
    </Stack>
    )
}