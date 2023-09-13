import { Container } from "@chakra-ui/react";
import React from "react";
import { AdminHome } from "../Components/AdminDashboard/AdminHome";
import { AdminLeftBar } from "../Components/AdminDashboard/AdminLeftBar";


const AdminDashboard=()=>{
    return (<Container minW="100%" bgColor={"rgb(22,17,58)"} m="0px" p="0px">
      
        <AdminLeftBar/>
    </Container>)
}


export default AdminDashboard;