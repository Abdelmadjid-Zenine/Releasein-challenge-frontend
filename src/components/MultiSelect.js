import React, { useContext, useState } from 'react';

import Select from 'react-select';
// import { options } from '../../../backend/Routes/productTypeRoutes';

import selectedOptiontsContext from '../selectedOptiontsContext';


const MultiSelect = ({options, name}) => {
  const contextValue = useContext(selectedOptiontsContext) 
  const handleChange = (e) => {
    console.log(e);
    contextValue.selectedOptions.push([...e])
}  
  
  return  (<Select
    
    isMulti
    name={name}

    options={options}
    onChange={(e) => handleChange(e)}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  )
};

export default MultiSelect;
