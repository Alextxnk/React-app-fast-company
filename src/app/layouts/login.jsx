import React, { useState } from 'react';
import LoginForm from '../components/ui/loginForm';
import { useParams } from 'react-router-dom';
import RegisterForm from '../components/ui/registerForm';

const Login = () => {
   const { type } = useParams();
   const [formType, setFormType] = useState(
      type === 'register' ? type : 'login'
   );

   const toggleFormType = () => {
      setFormType(prevState => prevState === 'register' ? 'login' : 'register');
   };

   return (
      <div className='container mt-5'>
         <div className='row'>
            <div className='col-md-6 offset-md-3 shadow p-4'>
               <h3 className='mb-4'>
                  {formType === 'register' ? 'Регистрация' : 'Вход'}
               </h3>
               {formType === 'register'
                  ? (
                     <>
                        <RegisterForm />
                        <p>Уже есть аккаунт? <a role='button' onClick={toggleFormType}>Войти</a></p>
                     </>
                  )
                  : (
                     <>
                        <LoginForm />
                        <p>Еще не зарегистрированы? <a role='button' onClick={toggleFormType}>Регистрация</a></p>
                     </>
                  )}
            </div>
         </div>
      </div>
   );
};

export default Login;
