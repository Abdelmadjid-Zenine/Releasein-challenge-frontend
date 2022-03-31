import axios from 'axios';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
// import Select from 'react-select/dist/declarations/src/Select';
import SelectedOptiontsContext from '../../selectedOptiontsContext';

import Select from 'react-select';


const ProductTypeForm = () => {
    const [options, setOptions] = useState([])
    const [productName, setproductName] = useState("")
    const [productAttributes, setproductAttributes] = useState([])
    const [showForm, setshowForm] = useState(false)
    const [attribute, setAttribute] = useState({
        Name:"",
        Type:"",
        Date:""
    })

    const handleAttrChange = (e) => {
        const value = e.target.value;
       
        setAttribute((prevState) => ({
      
          ...prevState,
      
          [e.target.name]: e.target.value,
          
        }));
      
    }

    const addAttribute = (e) => {
        e.preventDefault()

        setOptions((prevState)=>[...prevState,{value:attribute.Name, label:attribute.Name, Type:attribute.Type, Date:attribute.Date}])
        setAttribute({  
            Name:"",
            Type:"",
            Date:""
        })
    }
    const handleNameChange = e => { 
        console.log(e) 
        setproductName(e.target.value)    
       
    }
    const handleSelectChange = (e) => {
       
        setproductAttributes([...e])
       
    }  
    const onSubmit = e => {
        e.preventDefault()
        const productType = {
            Name:productName,
            Attributes:productAttributes
            }
            
        axios.post("http://localhost:5001/productTypes/addProductType", productType)
        .then((res => console.log(res)))
        

    }
    const toggleForm = (e) =>{
        e.preventDefault()
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
                    <button className="btn btn-block add-attr" type="submit" onClick={(e) => addAttribute(e)}>Add Attribute</button>
                </div>
       </>
       
        
    )
    
    return (
        <section className='form'>
            <form action="" onSubmit={onSubmit}>
                <div className="form-group">
                   <label htmlFor="Name">Product Type</label> 
                   <input type="text" name='Name' id="name" value={productName.Name} onChange={(e) => handleNameChange(e)}/>
                </div>
               
                <div className="form-group">
                   <label htmlFor="Attributes">Attributes</label> 
                   <Select
                        
                        isMulti
                        name="Attributes"

                        options={options}
                        onChange={(e) => handleSelectChange(e)}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                  
                </div>
                
                <p className='form-line'>Add attributes <button className='btn-toggle' onClick={(e) => toggleForm(e)}><FaPlus/></button></p>
                {showForm && attributesFields}
                <div className='form-group'>
                    <button className="btn btn-block" type="submit">Add Product Type</button>
                </div>
            </form>
        </section>
    );
};


export default ProductTypeForm;