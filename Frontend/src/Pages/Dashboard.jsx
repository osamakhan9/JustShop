import { Container } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../Components/Dashboard/Header";
import { Orders } from "../Components/Dashboard/Orders";
import { getMyOrders } from "../redux/orderSlice";

const Dashboard=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getMyOrders())
    },[])
    return(
            <Container p="0px" minW="100%">
                <Header/>
                <Orders/>
            </Container>

    )
    
}

export default Dashboard;