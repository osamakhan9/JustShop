import { SimpleGrid, VStack,Image,Heading, Button} from "@chakra-ui/react";
import React from "react";
import skicare from "../../assets/skincare.jpg"
import shave from "../../assets/shave.jpg"
import blade from "../../assets/blade.jpg"
import starterkits from "../../assets/starterkits.jpg"
import { NavLink } from "react-router-dom";
const Category=()=>{
    return (<SimpleGrid p="10px" spacing={"20px"} columns={{base:2,md:4}}>
            <VStack  bgColor={"rgb(237,216,185)"}>
                <Image minH={{base:"",md:"240px"}} maxH={{base:"",md:"240px"}} minW={{base:"",md:"220px"}} maxW={{base:"",md:"240px"}} src={blade}/>
                <NavLink to={"/shop"}>  <Button  fontSize={"19px"}  bgColor={"rgb(139,206,178)"} color="rgb(16,23,24)" minW={{base:"180",md:"240px"}} maxW={{base:"",md:"240px"}}>Blades & Handles</Button></NavLink>
            </VStack>
            <VStack bgColor={"rgb(237,216,185)"}>
                <Image minH={{base:"",md:"240px"}} maxH={{base:"",md:"240px"}} minW={{base:"",md:"220px"}} maxW={{base:"",md:"240px"}} src={"https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/40JophlAmCc0uFtVG5Qltq/2f239f8e2d8b8b0bc67163a4dcb00588/prep-scrub-3-oz_3x.png?auto=format&fit=max&h=480&w=480"}/>
                <NavLink to={"/shop"}>   <Button fontSize={"19px"}  bgColor={"rgb(139,206,178)"} color="rgb(16,23,24)"  minW={{base:"180",md:"240px"}} maxW={{base:"",md:"240px"}}>Skin Care</Button></NavLink>
            </VStack>
            <VStack  bgColor={"rgb(237,216,185)"}>
                <Image minH={{base:"",md:"240px"}} maxH={{base:"",md:"240px"}} minW={{base:"",md:"220px"}} maxW={{base:"",md:"240px"}} src={shave}/>
                <NavLink to={"/shop"}>     <Button fontSize={"19px"} bgColor={"rgb(139,206,178)"} color="rgb(16,23,24)"  minW={{base:"180",md:"240px"}} maxW={{base:"",md:"240px"}}>Shave Aids</Button></NavLink>
            </VStack>
            <VStack bgColor={"rgb(237,216,185)"}>
                <Image minH={{base:"",md:"240px"}} maxH={{base:"",md:"240px"}} minW={{base:"",md:"220px"}} maxW={{base:"",md:"240px"}} src={starterkits}/>
                <NavLink to={"/shop"}>    <Button fontSize={"19px"} bgColor={"rgb(139,206,178)"} color="rgb(16,23,24)" minW={{base:"180",md:"240px"}} maxW={{base:"240px",md:"240px"}}>Starter Kits</Button></NavLink>
            </VStack>
    </SimpleGrid>)
}

export default Category