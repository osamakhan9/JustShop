import { Container, Heading, VStack,Text,Button } from "@chakra-ui/react";
import React from "react";

export const AdminHome=()=>{
    return(
        <Container  minW="100%"  padding="20px" bgSize="contain" bgColor={"rgb(243,243,243)"} height={"200px"} width={"100%"}>
        <VStack p="20px" minW="100%" justifyContent={"center"} justifyItems="center" textAlign="center" direction="column">
        <Heading>Admin Dashboard</Heading>
         <Text>Home / Dashboard</Text>
         <Button maxW="220px" m="auto" onClick={()=>{}}>Log Out</Button>
        </VStack>
        
 </Container>
    )
}