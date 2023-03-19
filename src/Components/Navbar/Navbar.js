import React from "react";
import './Navbar.css'
import {Link } from "react-router-dom";

function Navbar () {
    return (
        <nav >
            <Link to='/'>LISTE</Link>
            <Link to='/stateanim'>STATE</Link>
            <Link to='/scroll'>SCROLL</Link>
        </nav>
    )
}

export default Navbar;