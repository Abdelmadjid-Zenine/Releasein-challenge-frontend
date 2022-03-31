import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductType from './ProductType';
import "../products/Product.css"
const productTypeList = (props) => {
    
    return (
        <div className='container'>
              <div className='add-product'>
                    <FaPlus/> <Link className="add-btn" to="/addProductType">Add product type</Link>
            </div>
                {
                    
                    props.prodtypes.map((prodType) => 
                        
                        <ProductType productType={prodType}/>
                    )
                }
        </div>
    );
};

export default productTypeList;