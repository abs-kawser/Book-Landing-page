import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import  "./Mainlayout.css"
import Footer from "../pages/Footer";

//import {Outlet} from 'react-router-dom'

const Mainlayout = () => {
      

    return (
        <div>
    
            <Navbar />
            <div>
                <Outlet />
            </div>
            
            <div className="footer">
            <Footer />
            </div>
        </div>
    );
};

export default Mainlayout;