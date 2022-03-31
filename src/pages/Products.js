import React from 'react';
import "../assets/pages/products.css"
import ProductList from '../components/products/ProductList';
const Products = () => {
    return (
        <div className='container'>
            <h1>Products</h1>
            <ProductList />
        </div>
    );
};

export default Products;