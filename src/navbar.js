import React from "react";
import {Link} from 'react-router-dom';
import { Header } from "./components";
import "./App.css";

const NavBar = () => {
    return(
        <nav className="navbar">
            <Header/>
            <ul className="nav-links">
                <li><Link to='homepage' className="links">Login</Link></li>
                <li><Link to='doctors' className="links">Doctors</Link></li>
                <li><Link to='patients' className="links">Patient records</Link></li>
                <li><Link to='records' className="links">Medical records</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;