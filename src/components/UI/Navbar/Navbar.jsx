import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link className="navbar__links" to="/posts">Posts</Link>
            </li>
            <li>
                <Link className="navbar__links" to="/about">About</Link>
            </li>
        </ul>
    );
};

export default Navbar;