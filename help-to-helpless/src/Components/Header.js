import React from "react";
import { Link } from "react-router-dom";
import logo from "../PICS/M.png";
import '../CSS/header.css'
const Header = () => {
  return <>
    <nav>
        <div className="containerr">
            <div className="logo_section">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="page_section">
                <ul className="page_inner_section">
                    <li>Home</li>
                    <li>About</li>
                    <li>Donation</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="page_section2">
                <ul >
                    <li className="stylee"><button><Link className="dec" to="/f">LOGIN</Link></button></li>
                </ul>
            </div>
        </div>
    </nav>
  </>;
};

export default Header;
