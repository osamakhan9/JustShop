import { Button, Heading, HStack,Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import {BsFillCartFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const Navbar=()=>{
    const state=useSelector((state)=>state.user)
    const cartItem=useSelector((state)=>state.cart.data);

 
    return(<HStack display={{base:"none",md:"flex"}} color="rgb(239,224,201)" p="15px" pl="30px" pr="30px" justifyContent={"space-between"} bgColor={"rgb(0,18,51)"}>
        <Heading letterSpacing={"1.5px"} fontSize={"25px"}>
            <Link to='/'>
            <Image width='100px' src='https://i.ibb.co/37bRHfc/PROJECT-LOGO-png.png'/>
            </Link>
        </Heading>
        <HStack>
        <NavLink to={"/"}><Button _hover={""} bgColor="transparent" >HOME</Button></NavLink>
        <NavLink to={"/shop"}> <Button _hover={""}bgColor="transparent">SHOP</Button></NavLink>
       <Button _hover={""}bgColor="transparent"><a href="mailto:okosama06@gmail.com">CONTACT US</a></Button>
            <NavLink  to={state.auth?"/dashboard":"/user"}>   <Button _hover={""}bgColor="transparent">{state.auth?"DASHBOARD":"LOGIN/REGISTER"}</Button></NavLink>
            <NavLink style={{display:"flex",alignContent:"center",textAlign:"center",margin:"auto"}} hidden={!state.auth}  to="/cart" ><HStack><BsFillCartFill /> <Heading fontSize={"17px"}>({cartItem.length})</Heading></HStack></NavLink>
        </HStack>
    </HStack>)
}

export default Navbar