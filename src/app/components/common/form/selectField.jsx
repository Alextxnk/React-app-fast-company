import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({
   label,
   name,
   value,
   onChange,
   defaultOption,
   options,
   error
}) => {
   const getSelectClasses = () => {
      return 'form-select' + (error ? ' is-invalid' : ' is-valid');
   };

   const optionsArray =
      !Array.isArray(options) && typeof options === 'object'
         ? Object.keys(options).map((optionName) => ({
            _id: options[optionName]._id,
            name: options[optionName].name
         }))
         : options;

   return (
      <div className='mb-4'>
         <label className='form-label' htmlFor={name}>
            {label}
         </label>
         <select
            className={getSelectClasses()}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
         >
            <option disabled value=''>
               {defaultOption}
            </option>
            {optionsArray &&
               optionsArray.map((option) => (
                  <option key={option._id} value={option._id}>
                     {option.name}
                  </option>
               ))}
         </select>
         {error && <div className='invalid-feedback'>{error}</div>}
      </div>
   );
};

SelectField.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string,
   defaultOption: PropTypes.string,
   options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
   value: PropTypes.string,
   onChange: PropTypes.func,
   error: PropTypes.string
};

export default SelectField;
