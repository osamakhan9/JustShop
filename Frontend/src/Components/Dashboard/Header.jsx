import { Button, Container, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { loginFailed } from "../../redux/userSlice";

export const Header=()=>{
    const dispatch=useDispatch()
    return(
        <Container minW="100%"  padding="20px" bgSize="contain" bgColor={"rgb(243,243,243)"} height={"200px"} width={"100%"}>
               <VStack p="20px" minW="100%" justifyContent={"center"} justifyItems="center" textAlign="center" direction="column">
               <Heading>Dashboard</Heading>
                <Text>Home / Dashboard</Text>
                <Button maxW="220px" m="auto" onClick={()=>{dispatch(loginFailed())}}>Log Out</Button>
               </VStack>

        </Container>
    )
}