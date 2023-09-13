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
import { deleteUser, roleSwitch } from "../../redux/adminSlice";
export const Users=()=>{
  const userData=useSelector((state)=>state.admin.user)
  const dispatch=useDispatch()
  const toast=useToast()
  const roleSwitcher=()=>{
 
  }

    return(
        <Stack direction={"column"} p="20px" minW={"80%"}>
        <TableContainer>
<Table size='sm' color={"white"}>
<Thead>
  <Tr bgColor={"white"}>
    <Th >Name</Th>
    <Th>Email</Th>
    <Th >Update Role</Th>
    <Th >Remove</Th>
  </Tr>
</Thead>
<Tbody>
{
    userData?.map(e=>{
      return(
        <Tr>
        <Td>{e.name}</Td>
        <Td>{e.email}</Td>
        <Td ><Button bgColor="rgb(0,18,51)" fontSize={"14px"} color="rgb(255,225,189)" onClick={()=>{dispatch(roleSwitch(e._id,toast))}}>{e.role=="admin"?"Make User":"Make Admin"}</Button></Td>
        <Td><Button bgColor="rgb(0,18,51)"  fontSize={"14px"} color="rgb(255,225,189)" onClick={()=>{dispatch(deleteUser(e._id,toast))}}>Remove</Button></Td>
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