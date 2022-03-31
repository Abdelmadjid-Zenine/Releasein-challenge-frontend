import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductTypeList from "../components/productTypes/productTypeList"
const ProductTypes = () => {
    const [productTypes, setProductTypes] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5001/productTypes")
        .then((res) => setProductTypes(res.data))
    }, [])
    return (
        <div className='container'>
             <h1>Products types</h1>
             <ProductTypeList prodtypes={productTypes}/>
        </div>
    );
};

export default ProductTypes;