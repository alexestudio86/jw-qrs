import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import {Footer} from "../components/Footer";
import { LoginProvider } from "../context/LoginProvider";


export function GeneralLayout() {

    return (
        <div className="container">
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    )

};