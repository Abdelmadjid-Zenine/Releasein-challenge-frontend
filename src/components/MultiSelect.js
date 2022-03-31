import React from 'react';

import Select from 'react-select';

export default ({options}) => (
  
  <Select
    
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
