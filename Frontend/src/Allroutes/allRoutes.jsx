import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Pages/AdminDashboard";
import Cart from "../Pages/Cart";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import User from "../Pages/User";
import PrivateRoute from "./PrivateRoute";


const AllRoutes=()=>{
    const role=useSelector((state)=>state.user.role)
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/dashboard/*" element={<PrivateRoute>{role=="user"?<Dashboard/>:<AdminDashboard/>}</PrivateRoute>}/>
        </Routes>
    )
}

export default AllRoutes