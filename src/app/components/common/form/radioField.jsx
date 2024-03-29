import React from 'react';
import PropTypes from 'prop-types';

const RadioField = ({ label, options, name, onChange, value }) => {
   return (
      <div className='mb-4'>
         <label className='form-label me-4'>{label}</label>
         {options.map((option) => (
            <div
               className='form-check form-check-inline'
               key={option.name + '_' + option.value}
            >
               <input
                  className='form-check-input'
                  type='radio'
                  name={name}
                  id={option.name + '_' + option.value}
                  checked={option.value === value}
                  value={option.value}
                  onChange={onChange}
               />
               <label
                  className='form-check-label'
                  htmlFor={option.name + '_' + option.value}
               >
                  {option.name}
               </label>
            </div>
         ))}
      </div>
   );
};

RadioField.propTypes = {
   label: PropTypes.string,
   options: PropTypes.array,
   name: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.string
};

export default RadioField;
