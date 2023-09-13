import { Button, Heading, Stack, VStack,Text, Container,Image, Box, Center} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import Gif from "./Home_Components/Gif";
import Banner from "./Home_Components/Banner";
import ProductSectionSlid from "./Home_Components/ProductSectionSlid";
import Advertisement from "./Home_Components/Advertisement";
const Home=()=>{

    const disptach=useDispatch();

    useEffect(()=>{
        disptach(fetchProducts())
    },[])

    return(
    <Box>
        <Gif/>
        <Banner/>
        <ProductSectionSlid/>
        <Advertisement/>
        <ProductSectionSlid/>
    </Box>
   
        
    )
}

export default Home;