import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div className='container'>
         <h1>Ошибка 404</h1>
         <h2>
            Данная страница не найдена, вернуться на <Link to='/'>Главную</Link>
         </h2>
      </div>
   );
};

export default NotFound;
