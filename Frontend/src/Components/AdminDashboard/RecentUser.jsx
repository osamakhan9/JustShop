import { Stack } from "@chakra-ui/react";
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
  } from '@chakra-ui/react'
import { useSelector } from "react-redux";

export const RecentUser=()=>{
  const userData=useSelector((state)=>state.admin.user)
    return(
        <Stack direction={"column"} p="20px">
            <TableContainer>
  <Table size='sm' color={"white"}>
    <Thead>
      <Tr bgColor={"white"}>
        <Th >Name</Th>
        <Th>Email</Th>
        <Th >Role</Th>
      </Tr>
    </Thead>
    <Tbody>
     { 

        userData?.map((e,i)=>{
          if(i<5){
            return <Tr>
          <Td>{e.name}</Td>
          <Td>{e.email}</Td>
          <Td >{e.role}</Td>
        </Tr>
          }
        })     
     }
    
    </Tbody>

  </Table>
</TableContainer>
        </Stack>
    )
}
