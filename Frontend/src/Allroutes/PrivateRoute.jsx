import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const PrivateRoute=({children})=>{
    const auth=useSelector((state)=>state.user.auth);

    if(auth){
        return children
    }

  return <Navigate to="/user"/>
}


export default PrivateRoute;