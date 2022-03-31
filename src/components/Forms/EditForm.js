import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Select from 'react-select';

const EditForm = () => {
        const {id} = useParams()
        const [prodInfos, setProdInfos] = useState({})
        useEffect(() => {
            axios.get(`http://localhost:5001/productTypes/${id}`)
            .then((res) => setProdInfos(res.data))
        })
        console.log(id)
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
                        
                        {/* <p className='form-line'>Add attributes <button className='btn-toggle' onClick={(e) => toggleForm(e)}><FaPlus/></button></p>
                        {showForm && attributesFields} */}
                        <div className='form-group'>
                            <button className="btn btn-block" type="submit">Update</button>
                        </div>
                    </form>
                </section>
    );
};

export default EditForm;