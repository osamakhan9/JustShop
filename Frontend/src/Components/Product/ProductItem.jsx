import { Button, HStack, VStack,Stack,Heading,Text,Image,Box, useToast, Flex, Center} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

const ProductItem=(props)=>{
    const{title,img,cost,category,id}=props
    const dispatch=useDispatch()
    const handleCart=()=>{
        dispatch(addItem(id,toast,setStatus))
    }
    const toast=useToast()
    const [status,setStatus]=useState(false)
   return(
    <>
     <Stack
      border={"2.6px solid whitesmoke"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >

      <Image
        margin={"auto"}
        src={img}
        alt={img}
        // minW="250px"  minH={"350px"}   maxW="350px"  maxH={"350px"}
      />

      <VStack align="revert-layer">
       <Box p='10px'>
       <Text _hover={{ color: "#0D6DD7" }} fontSize="17" color="#1D1D1D">
          {title}
        </Text>
        <Text>
        {!category?"Category":category} 
        </Text>
          <Text
            fontWeight="bold"
            fontSize={{ base: "15px", md: "17px", lg: "19px" }}
            color="#0D6DD7"
          >
            ₹{cost}
          </Text>
       </Box>
        <Center>
          
            <Button
              _hover={{ bgColor: "#0966cf", cursor: "pointer" }}
              onClick={status?()=>{}:handleCart}
              marginTop={"-15px"}
              marginBottom={"12px"}
              alignItems={"center"}
              colorScheme="teal"
              variant="solid"
              bgColor={"#0078FF"}
              width={{ base: "85px", sm: "98px", md: "106px", lg: "120px" }}
            >
              Add
            </Button>
          
        </Center>
      </VStack>
    </Stack>
    </>
   )
}

export default ProductItem;