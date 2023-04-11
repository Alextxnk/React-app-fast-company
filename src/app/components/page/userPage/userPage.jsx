import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../../api';
import Qualities from '../../ui/qualities';
import { useNavigate } from 'react-router-dom';

const UserPage = ({ userId }) => {
   const history = useNavigate();
   const [user, setUser] = useState();

   useEffect(() => {
      api.users.getById(userId).then((data) => setUser(data));
   }, []);

   const handleClick = () => {
      history(-1);
   };

   if (user) {
      return (
         <div className='p-3'>
            <h1>{user.name}</h1>
            <h2>Профессия: {user.profession.name}</h2>
            <Qualities qualities={user.qualities} />
            <p>Встретился, раз: {user.completedMeetings}</p>
            <h2>Оценка: {user.rate}</h2>
            <button onClick={handleClick} className='btn btn-outline-primary'>
               Все пользователи
            </button>
         </div>
      );
   }

   return (
      <div className='d-flex justify-content-center p-3'>
         <h3>Загрузка...</h3>
      </div>
   );
};

UserPage.propTypes = {
   userId: PropTypes.string.isRequired
};

export default UserPage;
