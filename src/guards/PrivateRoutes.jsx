import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";
import { useEffect } from "react";


export function PrivateRoutes({user}) {
    
    const navigate = useNavigate();

    useEffect( () => {
        console.log('us: ', user);
        if (user === false) {
            navigate('login')
        }
    },[] )

    return <Outlet/>


}