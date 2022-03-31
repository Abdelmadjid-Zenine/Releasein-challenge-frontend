import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import EditForm from '../Forms/EditForm';
// import productType from '../../../../backend/Models/productType';
import "./ProductType.css"
const ProductType = (props) => {
    const deleteProdType =  async () => {
        await axios.post(`http://localhost:5001/productTypes/${props.productType._id}`, props.productType._id)
    }
    const updateProdType =  async () => {
        await axios.put(`http://localhost:5001/productTypes/${props.productType._id}`, props.productType)
    }

    
    return (
        
        <div className='product'>
        <h1 className='prodType-name'>{props.productType.Name}</h1>
        {console.log(props.productType._id)}
        <div className='buttons'>
            <Link className='link-btn btn-view' to="/" >Details</Link>
            <Link className='link-btn btn-update' to={`/edit/${props.productType._id}`} onClick={updateProdType} state={props.productType}>Edit</Link>
            <Link className='link-btn btn-delete' to="/" onClick={deleteProdType}>Delete</Link>

        </div>
        
        
    </div>
        
    );
};

export default ProductType;