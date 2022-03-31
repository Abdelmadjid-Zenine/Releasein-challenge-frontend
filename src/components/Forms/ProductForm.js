import React, { useState } from 'react';
import MultiSelect from '../MultiSelect';
import "./ProductForm.css"
const ProductForm = () => {
    const [productData, setProductData] = useState({
        Name:"",
        productType:"",
        assignedAttributes:[]

    })
    const handleChange = e => {

        const value = e.target.value;
      
        setProductData((prevState) => ({
      
          ...prevState,
      
          [e.target.name]: e.target.value
      
        }));
      
      }
    const onSubmit = e => {
        e.preventDefault()
    }
    return (
        <section className='form'>
            <form action="" onSubmit={onSubmit}>
                <div className="form-group">
                   <label htmlFor="name">Product Name</label> 
                   <input type="text" name='text' id="name" value={productData.Name} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Product Type</label> 
                   {/* <input type="text" name='productType' id="prodType" value={productData.productType} onChange={handleChange}/> */}
                   <MultiSelect/>
                </div>
                <div className="form-group">
                   <label htmlFor="name">Attributes</label> 
                   {/* <input type="text" name='assignedAttributes' id="prodType" value={productData.assignedAttributes} onChange={handleChange}/> */}
                   <MultiSelect/>
                </div>
                <div className='form-group'>
                    <button className="btn btn-block" type="submit">Add Product</button>
                </div>
            </form>
        </section>
    );
};

export default ProductForm;