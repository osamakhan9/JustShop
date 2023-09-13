import { Stack,VStack,Image,Button } from "@chakra-ui/react";
import React from "react";
import compare from "../../assets/compare.jpg"
import compare2 from "../../assets/compareacne.jpg"

const Compare=()=>{
    return(
        <Stack gap="20px" p="10px" direction={{base:"column",md:"row"}}>
        <VStack>
                <Image minH={{base:"",md:"340px"}} maxH={{base:"",md:"340px"}} minW={{base:"",md:"320px"}} maxW={{base:"",md:"340px"}} src={compare}/>
                <Button fontSize={"19px"} bgColor={"transparent"} color="rgb(0,18,51)"  minW={{base:"",md:"320px"}} maxW={{base:"",md:"340px"}}>Shave Aids</Button>
            </VStack>
            <VStack>
                <Image minH={{base:"",md:"340px"}} maxH={{base:"",md:"340px"}} minW={{base:"",md:"320px"}} maxW={{base:"",md:"340px"}} src={compare2}/>
                <Button fontSize={"19px"} bgColor={"transparent"} color="rgb(0,18,51)"minW={{base:"",md:"320px"}} maxW={{base:"",md:"340px"}}>Starter Kits</Button>
            </VStack>
        </Stack>
    )
}

export default Compare