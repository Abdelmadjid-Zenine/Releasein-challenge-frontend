import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import "./Product.css"
import {FaPlus} from "react-icons/fa"
const Product = () => {
    return (
        <>
           
            <div className='product'>
                <h1></h1>
                
                <div className='buttons'>
                    <Link className='link-btn btn-view' to="/">Details</Link>
                    <Link className='link-btn btn-update' to="/">Edit</Link>
                    <Link className='link-btn btn-delete' to="/">Delete</Link>

                </div>
            </div>
        </>
    );
};

export default Product;