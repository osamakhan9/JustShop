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
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { AddAddress, GetAddress, UpdateAddress } from "../../redux/cartSlice";

const Address=()=>{
    const toast=useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const addressData=useSelector((state=>state.cart.address))
    const state=useSelector(state=>state.cart.data);
    const [address,setaddress]=useState({
      fullname:"",
      landmark:"",
      mobile:"",
      state:"",
      city:"",
      street:"Street"

    })
    const HandleAddress=()=>{
      dispatch(AddAddress(address,toast))
    }

    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(GetAddress())
    },[])
    const HandleUpdate=()=>{
      dispatch(UpdateAddress(address,toast))
    }
    useEffect(()=>{
      setaddress({address,...addressData});
    },[addressData])
    return(
        <Stack hidden={state.length==0} direction="column" bgColor={"rgb(249,243,234)"} p="20px"> 
        <Heading color="rgb(0,18,51)" fontSize="22px">Deliver to</Heading>
        <Stack direction="column">
        <HStack minW={"full"} justifyContent="space-between">
                <Text>Name</Text>
                <Text>{addressData.fullname||"Your Name"}</Text>
                
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>Mobile No</Text>
                <Text>{addressData.mobile||"+91"}</Text>
                
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>City</Text>
                <Text>{addressData.city||"Your City"}</Text>
                
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>State</Text>
                <Text>{addressData.state||"Your State"}</Text>
                
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>Zip Code</Text>
                <Text>{addressData.zipcode||"ZipCode"}</Text>
                
            </HStack>
            
        </Stack>
        <Button color="rgb(249,243,234)" bgColor={"rgb(0,18,51)"} onClick={onOpen}>{addressData?.fullname?.length>5?"Update Address":"Add Address"}</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{addressData?.fullname?.length>5?"Update Address":"Add Address"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input value={address.fullname} placeholder='Full name' onChange={(e)=>{setaddress({...address,fullname:e.target.value})}} />
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Mobile No</FormLabel>
              <Input placeholder='Mobile No'  value={address.mobile} onChange={(e)=>{setaddress({...address,mobile:e.target.value})}}/>
            </FormControl>
          
            <SimpleGrid columns={2} spacing="10px">
            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input placeholder='City' value={address.city} onChange={(e)=>{setaddress({...address,city:e.target.value})}}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>State</FormLabel>
              <Input placeholder='State'  value={address.state} onChange={(e)=>{setaddress({...address,state:e.target.value})}}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Landmark (Optional)</FormLabel>
              <Input placeholder='Landmark'  value={address.landmark} onChange={(e)=>{setaddress({...address,landmark:e.target.value})}}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Zip Code</FormLabel>
              <Input placeholder='Zip Code'  value={address.zipcode} onChange={(e)=>{setaddress({...address,zipcode:e.target.value})}}/>
            </FormControl>
            </SimpleGrid>
            
          </ModalBody>

          <ModalFooter>
            <Button onClick={HandleAddress} bgColor="rgb(0,18,51)" color="rgb(249,243,234)" hidden={addressData?.fullname?.length>5} mr={3} >
              ADD
            </Button>
            <Button bgColor="rgb(0,18,51)" color="rgb(249,243,234)" onClick={HandleUpdate} hidden={!addressData?.fullname?.length>5}>UPDATE</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        
        </Stack>
    
    )
}

export default Address