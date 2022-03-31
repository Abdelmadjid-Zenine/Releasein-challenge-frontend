import axios from 'axios';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import MultiSelect from '../MultiSelect';

const ProductTypeForm = () => {
    const [options, setOptions] = useState([])
    const [showForm, setshowForm] = useState(false)
    const [attribute, setAttribute] = useState({
        Name:"",
        Type:"",
        Date:""
    })
    const [productTypeData, setProductTypeData] = useState({
        Name:"",
        Attributes:[]

    })
    const handleAttrChange = (e) => {
        const value = e.target.value;
       
        setAttribute((prevState) => ({
      
          ...prevState,
      
          [e.target.name]: e.target.value
      
        }));
      
    }
    const addAttribute = () => {
        setOptions((prevState)=>[...prevState,{value:attribute.Name, label:attribute.Name}])
    }
    const handleChange = e => {

        const value = e.target.value;
      
        setProductTypeData((prevState) => ({
      
          ...prevState,
      
          [e.target.name]: e.target.value
      
        }));
      
    }
    const onSubmit = e => {
        e.preventDefault()
        setProductTypeData({
            Name:productTypeData.Name,
            Attributes:[...productTypeData.Attributes]
        })
        
        axios.post("http://localhost:5000/productTypes/addProductType", productTypeData)
        .then((res => console.log(res)))
        setProductTypeData({
            Name:"",
            Attributes:[]
        })

    }
    const toggleForm = () =>{
        setshowForm(!showForm)
    }
    const attributesFields = (
       <>
        <div className="form-group">
                   <label htmlFor="Name">Name</label> 
                   <input type="text" name='Name' id="name" value={attribute.Name} onChange={handleAttrChange}/>
        </div>
        <div className="form-group">
                   <label htmlFor="Type">Type</label> 
                   <input type="text" name='Type' id="name" value={attribute.Type} onChange={handleAttrChange}/>
        </div>
        <div className="form-group">
                   <label htmlFor="Date">Date</label> 
                   <input type="date" name='Date' id="name" value={attribute.Date} onChange={handleAttrChange}/>
        </div>
        <div className='form-group'>
                    <button className="btn btn-block add-attr" type="submit" onClick={() => addAttribute()}>Add Attribute</button>
                </div>
       </>
       
        
    )
    return (
        <section className='form'>
            <form action="" onSubmit={onSubmit}>
                <div className="form-group">
                   <label htmlFor="name">Product Type</label> 
                   <input type="text" name='text' id="name" value={productTypeData.Name} onChange={handleChange}/>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="name">Product Type</label> 
                   <input type="text" name='productType' id="prodType" value={""} onChange={handleChange}/>
                </div> */}
                <div className="form-group">
                   <label htmlFor="Attributes">Attributes</label> 
                   <MultiSelect options={options}/>
                </div>
                
                <p className='form-line'>Add attributes <button className='btn-toggle' onClick={toggleForm}><FaPlus/></button></p>
                {!showForm && attributesFields}
                <div className='form-group'>
                    <button className="btn btn-block" type="submit">Add Product Type</button>
                </div>
            </form>
        </section>
    );
};


export default ProductTypeForm;