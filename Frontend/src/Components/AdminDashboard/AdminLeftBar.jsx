import { Button, Container, Stack,VStack } from "@chakra-ui/react";
import AdminDashboard from "../../Pages/AdminDashboard";
import {RiDashboard2Line} from "react-icons/ri"
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import {BsBagPlus,BsBag} from "react-icons/bs"
import {MdAdd} from "react-icons/md"
import {CgMenuGridO} from "react-icons/cg"
import Chart from "./Chart";
import { HomeView } from "./HomeView";
import { Users } from "./Users";
import { Product } from "./Product.admin";
import { Cart } from "./Cart.admin";
import { Orders } from "./Orders.admin";
import { NavLink, Route,Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAdminData } from "../../redux/adminSlice";
import { Additem } from "./AddItem";
import { Refund } from "./Refund.admin";
import { logout } from "../../redux/userSlice";

export const AdminLeftBar=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAdminData())
    },[])
    const data={
        labels:["Total Order","Total User"],
        datasets:[
            {
                label:"PPF Calculator",
                data:[100,200],
                backgroundColor:[
                    "rgb(84,104,255)",
                    "rgb(152,164,255)"
                ]
            }
        ]
    }
    return(
       <Stack  direction={"row"} p="0px" m="auto" gap="0px" >
            <Stack style={{gap:"15px"}} direction={"column"} width="30%" maxW={"30%"} justifyContent="left"   justifyItems={"left"} textAlign={"left"}  bgColor="rgb(39,41,83)" p="50px" pt="50px" pb="100px"  >
              <Button m="auto"  justifyContent={"left"}  minW={"170px"} bgColor={"rgb(0,18,51)"} color="white" hidden="true" leftIcon={<RiDashboard2Line/>}>Dashboard</Button>
              <NavLink to="/dashboard/">   <Button m="auto"  justifyContent={"left"}  minW={"170px"} bgColor={"rgb(0,18,51)"} color="white" leftIcon={<RiDashboard2Line/>}>Dashboard</Button></NavLink>
                   <NavLink to="/dashboard/orders"> <Button m="auto" justifyContent={"left"} bgColor={"rgb(0,18,51)"} minW={"170px"}  color="white"  leftIcon={<AiOutlineShoppingCart />}>Orders</Button></NavLink>
                   <NavLink to="/dashboard/refund"> <Button m="auto" justifyContent={"left"} bgColor={"rgb(0,18,51)"} minW={"170px"}  color="white"  leftIcon={<AiOutlineShoppingCart />}>Cancel Orders</Button></NavLink>
                   <NavLink to="/dashboard/products"> <Button m="auto" justifyContent={"left"}   minW={"170px"} bgColor={"rgb(0,18,51)"} color="white"  leftIcon={<CgMenuGridO/>}>Products</Button></NavLink>
                   <NavLink to="/dashboard/users"> <Button m="auto" justifyContent={"left"}   minW={"170px"} bgColor={"rgb(0,18,51)"} color="white"  leftIcon={<AiOutlineUser/>}>Users</Button></NavLink>
                 {/* <NavLink to="/dashboard/cart">   <Button m="auto" justifyContent={"left"} minW={"170px"} bgColor={"rgb(0,18,51)"} color="white"  leftIcon={<BsBag/>}>Cart Item</Button></NavLink> */}
                    <Additem/>
                    <Button onClick={()=>{dispatch(logout())}}>Log Out</Button>
            </Stack>
            {
                <Routes>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/products" element={<Product/>}/>
                    <Route path="/refund" element={<Refund/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/" element={<HomeView/>} />
                </Routes>
            }
     
          {/* {<HomeView/>} */}
       </Stack>
    )
}