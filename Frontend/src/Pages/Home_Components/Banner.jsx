import React from 'react';
import './style.css'
import {Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <Box className="box1">
        <Box className="banner" display={{base:"none", md:"block", sm:"block"}}>
           <NavLink to={'/shop'}>
           <img src='https://staticimg.titan.co.in/production/promotions/fastrack/Dialitup/FT_Dialitup_2.gif' alt="banner" />
           </NavLink>
        </Box>

        <Box className="ad">
           <NavLink to={"/shop"}>
           <img src='https://media0.giphy.com/media/KeF6YimEqE2wS4tT9b/giphy.gif?cid=ecf05e4747rctblgvo2p9rwvue84x4x7npgltrv6vbklukyw&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt="ad" />
           </NavLink>
        </Box>
    </Box>
  )
}

export default Banner