import React from 'react';
import { Link } from 'react-router-dom';
import "../products/Product.css"
const ProductType = () => {

    return (
        <>
           
            <div className='product'>
                <h1></h1>
                
                <div className='buttons'>
                    
                    <Link className='link-btn btn-update' to="/edit">Edit</Link>
                    <Link className='link-btn btn-delete' to="/">Delete</Link>

                </div>
            </div>
        </>
    );
};

export default ProductType;