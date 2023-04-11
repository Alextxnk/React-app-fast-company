import React, { useEffect, useState } from 'react';
import TextField from '../components/textField';
import { validator } from '../utils/validator';

const Login = () => {
   const [data, setData] = useState({ email: '', password: '' });
   const [errors, setErrors] = useState({});

   const handleChange = ({ target }) => {
      setData((prevState) => ({
         ...prevState,
         [target.name]: target.value
      }));
   };

   const validatorConfig = {
      email: {
         isRequired: { message: 'Электронная почта обязательна для заполнения' }
      },
      password: {
         isRequired: { message: 'Пароль обязателен для заполнения' }
      }
   };

   useEffect(() => {
      validate();
   }, [data]);

   const validate = () => {
      const errors = validator(data, validatorConfig);

      setErrors(errors);
      return Object.keys(errors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = validate();
      if (!isValid) return;
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className='form-group row mx-5'>
            <TextField
               label='Электронная почта'
               name='email'
               value={data.email}
               placeholder='email@example.com'
               onChange={handleChange}
               error={errors.email}
            />
            <TextField
               label='Пароль'
               type='password'
               name='password'
               value={data.password}
               onChange={handleChange}
               error={errors.password}
            />
            <button className='btn btn-outline-primary' type='submit'>
               Отправить
            </button>
         </div>
      </form>
   );
};

export default Login;
