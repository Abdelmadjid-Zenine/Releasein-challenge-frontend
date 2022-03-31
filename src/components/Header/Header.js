import React from 'react';
import {NavLink} from "react-router-dom"
import "./Header.css"
const Header = () => {
    return (
        <header className='header-nav'>
            <div className='title'>
                <h2>Product Management App</h2>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li >
                        <NavLink className='link' to="/products">Products</NavLink>
                    </li>
                    <li >
                        <NavLink className='link' to="/productTypes">ProductTypes</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;