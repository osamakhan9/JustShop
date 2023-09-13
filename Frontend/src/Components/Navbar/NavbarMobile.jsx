import React from "react";
import {HStack ,Drawer,Heading, DrawerBody,Button, DrawerFooter,DrawerHeader,DrawerOverlay,  DrawerContent, DrawerCloseButton, VStack, useDisclosure,  } from '@chakra-ui/react'
import {BsFillCartFill} from "react-icons/bs"
import {RiMenu3Line} from "react-icons/ri"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function NavbarMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const state=useSelector((state)=>state.user)
    const cartItem=useSelector((state)=>state.cart.data);
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          <RiMenu3Line/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Finest Shave</DrawerHeader>
  
            <DrawerBody bgColor={"rgb(0,18,51)"}>
              <VStack color="rgb(239,224,201)">
         
              <NavLink to={"/"}><Button _hover={""} color="rgb(16,23,24)" bgColor="white" >HOME</Button></NavLink>
        <NavLink to={"/shop"}> <Button _hover={""}bgColor="transparent">SHOP</Button></NavLink>
       
            <NavLink  to={state.auth?"/dashboard":"/user"}>   <Button _hover={""}bgColor="transparent">{state.auth?"Dashboard":"LOGIN/REGISTER"}</Button></NavLink>
            <NavLink style={{display:"flex",alignContent:"center",textAlign:"center",margin:"auto"}} hidden={!state.auth}  to="/cart" ><HStack><BsFillCartFill /> <Heading fontSize={"17px"}>({cartItem.length})</Heading></HStack></NavLink>
              </VStack>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default NavbarMobile