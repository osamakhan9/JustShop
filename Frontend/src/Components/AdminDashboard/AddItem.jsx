import React, { useState } from "react";
import { Stack,Heading, HStack,Text,Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormControl,
    Input,
    SimpleGrid,
    useToast,} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AddProduct } from "../../redux/adminSlice";

export const Additem=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
   const[productinfo,setinfo]=useState({
    title:"",
    cost:"",
    category:"",
    image:""
   })
   const dispatch=useDispatch()
   const toast=useToast()
   const addproduct=()=>{
        if(productinfo.category.length>4 && productinfo.cost>0 && productinfo.title.length>5 && productinfo.image.length>5){
            dispatch(AddProduct(productinfo,toast))
        }else{
            alert("All input Fields are required")
        }
   }

    return (
        <>
    <Button m="auto" justifyContent={"left"} minW={"170px"} bgColor={"rgb(0,18,51)"} color="white"  leftIcon={<MdAdd/>}onClick={onOpen}>{"Add Product"}</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{"Add Product"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
              <FormLabel>Product Title</FormLabel>
              <Input  placeholder='Title' value={productinfo.title} onChange={(e)=>{
                setinfo(state=>{ return {...state,title:e.target.value}})}}/>
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input placeholder='Eg. SkinCare'  value={productinfo.category} onChange={(e)=>{
                setinfo(state=>{ return {...state,category:e.target.value}})}} />
            </FormControl>
          
            <SimpleGrid columns={2} spacing="10px">
            <FormControl mt={4}>
              <FormLabel>Cost</FormLabel>
              <Input type="number" placeholder='Eg. 2999'  value={productinfo.cost} onChange={(e)=>{
                setinfo(state=>{ return {...state,cost:e.target.value}})}}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Product Image</FormLabel>
              <Input placeholder='Image Url'  value={productinfo.image} onChange={(e)=>{
                setinfo(state=>{ return {...state,image:e.target.value}})}}/>
            </FormControl>
         
            
            </SimpleGrid>
            
          </ModalBody>

          <ModalFooter>
            <Button bgColor="rgb(0,18,51)" color="rgb(249,243,234)" onClick={addproduct}>
              ADD
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
        
        </>
    )
}