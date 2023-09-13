import { Button, Center, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsBag, BsFillCartCheckFill } from "react-icons/bs";
import Chart from "./Chart";
import { RecentUser } from "./RecentUser";
import {NavLink} from "react-router-dom";
import {CgMenuGridO} from "react-icons/cg"
import { useSelector } from "react-redux";

export const HomeView = () => {
  const adminData=useSelector((state)=>state.admin)
  useEffect(()=>{
    console.log("ADminredux",adminData)
  },[adminData])
  return (
    <Stack direction={"column"} minW="80%"  justifyItems={"center"}  justifyContent="center">

  <Center minW={"100%"} p="20px" mt="0px" >
   
  <HStack   m="auto" mt="0px" gap="250px" pt="0px">
    <Chart/>
    <VStack m="auto" mt="0px" pt="0px">
    <HStack
    mt="0px"
        boxShadow={"md"}
        gap="20px"
        pl="20px"
        pr="20px"
        justifyContent={"space-between"}
        borderRadius={"10px"}
        p="10px"
        minW="280px"
        maxW={"280PX"}
        color="white"
        bgColor={"rgb(39,41,83)"}
      >
        <VStack>
          <Heading
            minW="full"
            textAlign={"left"}
            justifyContent={"left"}
            fontSize={"19px"}
          >
            {adminData?.cart?.length}
          </Heading>
          <Text justifyContent={"left"} fontSize={"19px"}>
            Cart Items
          </Text>
        </VStack>
        <BsBag size={"29px"} />
      </HStack>

      <HStack
        boxShadow={"md"}
        gap="20px"
        pl="20px"
        pr="20px"
        justifyContent={"space-between"}
        borderRadius={"10px"}
        p="10px"
        minW="280px"
        maxW={"280PX"}
        color="white"
        bgColor={"rgb(39,41,83)"}
      >
        <VStack>
          <Heading
            minW="full"
            textAlign={"left"}
            justifyContent={"left"}
            fontSize={"19px"}
          >
            {adminData?.order?.length}
          </Heading>
          <Text justifyContent={"left"} fontSize={"19px"}>
            Orders
          </Text>
        </VStack>
        <BsFillCartCheckFill size={"29px"} />
      </HStack>

      <HStack
        boxShadow={"md"}
        gap="20px"
        pl="20px"
        pr="20px"
        justifyContent={"space-between"}
        borderRadius={"10px"}
        p="10px"
        minW="280px"
        maxW={"280PX"}
        color="white"
        bgColor={"rgb(39,41,83)"}
      >
        <VStack>
          <Heading
            minW="full"
            textAlign={"left"}
            justifyContent={"left"}
            fontSize={"19px"}
          >
            {adminData?.product?.length}
          </Heading>
          <Text justifyContent={"left"} fontSize={"19px"}>
            All Products
          </Text>
        </VStack>
        <CgMenuGridO size={"29px"} />
      </HStack>
  
    </VStack>
  </HStack>
  </Center>
  <HStack borderBottom={"2px"} pl="30px" pr="40px" justifyContent="space-between" borderBottomColor="rgb(0,18,51)" pb="10px" pt="10px" bgColor={"rgb(39,41,83)"} maxW="100%" minW='100%' >
        <Heading  color="white" fontSize={"19px"}>Recent User</Heading>
        <NavLink to="/dashboard/users"> <Button m="auto" justifyContent={"left"}   minW={"170px"} bgColor={"rgb(0,18,51)"} color="white"  leftIcon={<CgMenuGridO/>}>View All</Button></NavLink>
    </HStack>

    <RecentUser/>
    </Stack>
  );
};
