import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, name, value, placeholder, onChange, error }) => {
   return (
      <div className='mb-3'>
         <label className='col-md-4 col-form-label text-md-right' htmlFor={name}>{label}</label>
         <input
            className='form-control'
            type={type}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
         />
         {error && <p className='text-danger form-text'>{error}</p>}
      </div>
   );
};

TextField.defaultProps = {
   type: 'text'
};

TextField.propTypes = {
   label: PropTypes.string,
   type: PropTypes.string,
   name: PropTypes.string,
   value: PropTypes.string,
   placeholder: PropTypes.string,
   onChange: PropTypes.func,
   error: PropTypes.string
};

export default TextField;
