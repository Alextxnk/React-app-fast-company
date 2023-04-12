import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';

const MultiSelectField = ({ options, onChange, name }) => {
   const animatedComponents = makeAnimated();

   const optionsArray =
      !Array.isArray(options) && typeof options === 'object'
         ? Object.keys(options).map((optionName) => ({
            label: options[optionName].name,
            value: options[optionName]._id
         }))
         : options;

   const handleChange = (e) => {
      console.log(e);
      onChange(e);
   };

   return (
      <Select
         isMulti
         options={optionsArray}
         closeMenuOnSelect={false}
         components={animatedComponents}
         className='basic-multi-select mb-4'
         classNamePrefix='select'
         onChange={handleChange}
         name={name}
         placeholder= 'Выберите качества'
      />
   );
};

MultiSelectField.propTypes = {
   options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
   onChange: PropTypes.func,
   name: PropTypes.string
};

export default MultiSelectField;
