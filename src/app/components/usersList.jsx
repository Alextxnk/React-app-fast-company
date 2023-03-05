import React, { useState } from 'react';
import { paginate } from '../utils/paginate';
import Pagination from './pagination';
import User from './user';
import PropTypes from 'prop-types';
import GroupList from './groupList';
import api from '../api';

const UsersList = ({ users, ...rest }) => {
   const [currentPage, setCurrenPage] = useState(1);
   const [professions, setProfession] = useState(api.professions.fetchAll());
   const count = users.length;
   const pageSize = 4;

   const handleProfessionSelect = (params) => {
      setProfession();
      console.log(params);
   };
   console.log(professions);

   const handlePageChange = (pageIndex) => {
      setCurrenPage(pageIndex);
   };

   const userCrop = paginate(users, currentPage, pageSize);

   return (
      <>
         <GroupList items={professions} onItemSelect={handleProfessionSelect} />
         {count > 0 && (
            <table className='table'>
               <thead>
                  <tr>
                     <th scope='col'>Имя</th>
                     <th scope='col'>Качества</th>
                     <th scope='col'>Профессия</th>
                     <th scope='col'>Встретился, раз</th>
                     <th scope='col'>Оценка</th>
                     <th scope='col'>Избранное</th>
                     <th scope='col'>Действия</th>
                  </tr>
               </thead>
               <tbody>
                  {userCrop.map((user) => (
                     <User key={user._id} {...rest} {...user} />
                  ))}
               </tbody>
            </table>
         )}
         <Pagination itemsCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
      </>
   );
};

UsersList.propTypes = {
   users: PropTypes.array.isRequired
};

export default UsersList;
