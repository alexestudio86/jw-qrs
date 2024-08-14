import { Outlet } from "react-router-dom";
import {Footer} from "../components/Footer";
import { Header } from "../components/Header";
import './GeneralLayout.css'


export function GeneralLayout() {

    return (
        <div className="container">
            <Header/>
            <main className="py-2">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )

};