import { Link } from "react-router-dom";
import React  from "react";

const Navbar = () => {
    return (
        <nav className=" bg-red-500">
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
        </nav>
    );
};

export default Navbar;