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
export const Orders=()=>{
  const OrderData=useSelector((state)=>state.admin.order)
  const dispatch=useDispatch()
  const toast=useToast()
    return(
        <Stack direction={"column"} p="20px" minW={"80%"}>
        <TableContainer>
<Table size='sm' color={"white"}>
<Thead>
  <Tr bgColor={"white"}>
    <Th>Sr.No</Th>
    <Th >Product</Th>
    <Th>User</Th>
    <Th >Status</Th>
    <Th >Remove</Th>
  </Tr>
</Thead>
<Tbody>
{
    OrderData?.map((e,i)=>{
      return(
        <Tr>
          <Td>{i+1}</Td>
        <Td>{e.product.title}</Td>
        <Td>{e?.user?.name}</Td>
        <Td ><Select bgColor={"rgb(22,17,58)"} onChange={(eve)=>{dispatch(updateOrderStatus(e._id,eve.target.value,toast))}}>
        <option  style={{backgroundColor:"rgb(22,17,58)"}} value={e.status}>{e.status}</option>

          <option style={{backgroundColor:"rgb(22,17,58)"}} value="Dispatched">Dispatched</option>
          <option  style={{backgroundColor:"rgb(22,17,58)"}} value="Out for delivery">Out For Delivery</option>
          <option  style={{backgroundColor:"rgb(22,17,58)"}} value="Cancelled">Cancel</option>
          <option  style={{backgroundColor:"rgb(22,17,58)"}} value="Placed">Placed</option>
          </Select></Td>
        <Td><Button bgColor="rgb(0,18,51)" color="rgb(255,225,189)" onClick={()=>{dispatch(deleteOrder(e._id,toast))}}>Delete</Button></Td>
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