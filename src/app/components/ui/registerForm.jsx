import React, { useEffect, useState } from 'react';
import TextField from '../common/form/textField';
import SelectField from '../common/form/selectField';
import RadioField from '../common/form/radioField';
import { validator } from '../../utils/validator';
import api from '../../api';

const RegisterForm = () => {
   const [data, setData] = useState({
      email: '',
      password: '',
      profession: '',
      gender: 'Мужчина'
   });
   const [errors, setErrors] = useState({});
   const [professions, setProfession] = useState();

   useEffect(() => {
      api.professions.fetchAll().then((data) => setProfession(data));
   }, []);

   const handleChange = ({ target }) => {
      setData((prevState) => ({
         ...prevState,
         [target.name]: target.value
      }));
   };

   const validatorConfig = {
      email: {
         isRequired: {
            message: 'Электронная почта обязательна для заполнения'
         },
         isEmail: { message: 'Email введен некорректно' }
      },
      password: {
         isRequired: { message: 'Пароль обязателен для заполнения' },
         isCapitalSymbol: {
            message: 'Пароль должен содержать хотя бы одну заглавную букву'
         },
         isContainDigit: {
            message: 'Пароль должен содержать хотя бы одно число'
         },
         min: {
            message: 'Пароль должен состоять минимум из 8 символов',
            value: 8
         }
      },
      profession: {
         isRequired: {
            message: 'Выберите профессию'
         }
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

   const isValid = Object.keys(errors).length === 0;

   const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = validate();
      if (!isValid) return;
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit} className='mb-2'>
         <TextField
            label='Электронная почта'
            name='email'
            value={data.email}
            placeholder='name@gmail.com'
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
         <SelectField
            label='Профессия'
            name='profession'
            value={data.profession}
            onChange={handleChange}
            defaultOption='Выбрать'
            options={professions}
            error={errors.profession}
         />
         <RadioField
            label='Пол'
            name='gender'
            options={[
               { name: 'Мужчина', value: 'Мужчина' },
               { name: 'Женщина', value: 'Женщина' }
            ]}
            onChange={handleChange}
            value={data.gender}
         />
         <button
            className='btn btn-primary w-100 mx-auto'
            type='submit'
            disabled={!isValid}
         >
            Зарегистрироваться
         </button>
      </form>
   );
};

export default RegisterForm;
