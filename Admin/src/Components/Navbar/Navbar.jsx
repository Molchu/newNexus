import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/Logo.png";
import navProfile from "../../assets/hand_icon.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlogo} alt="" className="nav-logo" />
            <img src={navProfile} className="nav-profile" alt="" />
        </div>
    );
}

export default Navbar;