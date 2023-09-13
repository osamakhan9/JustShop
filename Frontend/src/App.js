import { Heading, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllRoutes from "./Allroutes/allRoutes";
import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";
import NavbarMobile from "./Components/Navbar/NavbarMobile";
import Home from "./Pages/Home";
import { getItem } from "./redux/cartSlice";

function App() {
  const auth=useSelector((state)=>state.user.auth);
  
  const dispatch=useDispatch()
  useEffect(()=>{
    if(auth){
      dispatch(getItem())
    }
  },[auth])
  return (
    <>
    <Navbar/>
    <HStack p="20px"  bgColor={"rgb(0,18,51)"} display={{base:"flex",md:"none"}} justifyContent={"space-between"}>
      <Heading letterSpacing={"1.5px"} color="rgb(239,224,201)" fontSize={"19px"}>
        Finest Shave
      </Heading>
      <NavbarMobile/>
    </HStack>
  <AllRoutes/>
  <Footer/>
  
  </>
  );
}

export default App;
