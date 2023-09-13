import { Checkbox, Heading, Select, SimpleGrid, Stack, useToast, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../Components/Product/Pagination";
import ProductItem from "../Components/Product/ProductItem";
import { fetchProducts } from "../redux/productSlice";

const Shop = () => {
  const products=useSelector((state)=>{return state.product.data})
  const [productData,setproduct]=useState([])
  const[category,setcategory]=useState(undefined)
  const[filter,setfilter]=useState(1)
  const dispatch=useDispatch()
  const toast=useToast()
  useEffect(()=>{
    
    dispatch(fetchProducts(1,category,filter))
  },[category,filter])
  return (
    <Stack
      direction={{base:"column",md:"row"}}
      minW="100%"
      p="40px"
      border='1px solid black'
      justifyContent="space-between"
      
    >
      <Stack  direction={"column"} gap="20px">
        <Heading pb="5px" fontSize="20px" color="rgb(0,18,51)" borderBottom={"2px"} borderBottomColor="rgb(0,18,51)">CATEGORY</Heading>

       <Stack mt="20px" direction="column" gap="10px">
       <Checkbox  onChange={(e)=>{!e.target.checked?setcategory(undefined):setcategory(e.target.value)}} value={"Earbuds"}  colorScheme={"blue"} iconSize="1rem">
         Earbuds
        </Checkbox>
        <Checkbox value={"Headphone"}  onChange={(e)=>{!e.target.checked?setcategory(undefined):setcategory(e.target.value)}} colorScheme={"blue"} iconSize="1rem">
        Headphone
        </Checkbox>
        <Checkbox value="Watch" colorScheme={"blue"} iconSize="1rem" onChange={(e)=>{!e.target.checked?setcategory(undefined):setcategory(e.target.value)}}>
        Watch
        </Checkbox>
        {/* <Checkbox value="wipe" colorScheme={"blue"} iconSize="1rem" onChange={(e)=>{!e.target.checked?setcategory(undefined):setcategory(e.target.value)}}>
          Deodarant and Wipes
        </Checkbox>
        <Checkbox value="skincare" colorScheme={"blue"} iconSize="1rem" onChange={(e)=>{!e.target.checked?setcategory(undefined):setcategory(e.target.value)}}>
          Skin Care
        </Checkbox>
        <Checkbox colorScheme={"blue"} value="hair" iconSize="1rem" onChange={(e)=>{!e.target.checked?setcategory(undefined):setcategory(e.target.value)}}>
          Hair
        </Checkbox> */}
       </Stack>

        <Heading pb="5px" color="rgb(0,18,51)" borderBottom={"2px"} borderBottomColor="rgb(0,18,51)" fontSize="20px">FILTER BY PRICE</Heading>
      <Stack mt="20px" direction="column" gap="10px">
      <Checkbox value="1" onChange={()=>{setfilter(1)}}  colorScheme={"blue"} iconSize="1rem">
          Low to high
        </Checkbox>
        <Checkbox value="-1" onChange={()=>{setfilter(-1)}}  colorScheme={"blue"} iconSize="1rem">
          High to Low
        </Checkbox>
       
      </Stack>


        <Heading pb="5px" fontSize="20px" color="rgb(0,18,51)" borderBottom={"2px"} borderBottomColor="rgb(0,18,51)">PRODUCT TYPE</Heading>
        <Stack direction={"column"} gap="10px">
        <Checkbox colorScheme={"blue"} iconSize="1rem">
          New{" "}
        </Checkbox>
        <Checkbox colorScheme={"blue"} iconSize="1rem">
          Most Sold{" "}
        </Checkbox>
        </Stack>
      </Stack>
   <Stack 
   width={{ base: "100%", lg: "1200px" }}
   justify="stretch">
     
          <SimpleGrid 
           spacing={5}
           columns={{ base: 2, md: 3, lg: 4 }}
          >
      {
        products.map((e)=>{
         return <ProductItem
         key={e._id}
          img={e.image}
          title={e.title}
          cost={e.cost}
          category={e.category}
          id={e._id}
        />
        })
      }
      
      </SimpleGrid>
      
      <Pagination category={category}/>
   </Stack>
    </Stack>
  );
};

export default Shop;
