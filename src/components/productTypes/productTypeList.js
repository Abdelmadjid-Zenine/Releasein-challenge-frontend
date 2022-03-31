import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductType from './ProductType';

const productTypeList = () => {
    return (
        <div className='container'>
              <div className='add-product'>
                    <FaPlus/> <Link className="add-btn" to="/addProductType">Add product type</Link>
            </div>
            <div className='products'>
                {/*List of products*/}
                <ProductType/>
            </div>
            
        </div>
    );
};

export default productTypeList;