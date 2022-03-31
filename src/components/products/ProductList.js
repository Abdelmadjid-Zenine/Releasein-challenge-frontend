import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductList = () => {
    return (
        <div className='container'>
             <div className='add-product'>
                    <FaPlus/> <Link className="add-btn" to="/addProduct">Add Product</Link>
            </div>
            <div className='products'>
                {/*List of products*/}
                <Product/>
            </div>
        </div>
    );
};

export default ProductList;