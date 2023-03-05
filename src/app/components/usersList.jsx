import React, { useState, useEffect } from 'react';
import { paginate } from '../utils/paginate';
import Pagination from './pagination';
import User from './user';
import PropTypes from 'prop-types';
import GroupList from './groupList';
import api from '../api';

const UsersList = ({ users: allUsers, ...rest }) => {
   const [currentPage, setCurrenPage] = useState(1);
   const [professions, setProfession] = useState(api.professions.fetchAll());
   const [selectedProf, setSelectedProf] = useState();
   const count = allUsers.length;
   const pageSize = 4;

   useEffect(() => {
      // 1 способ
      /* api.professions.fetchAll().then((data) => setProfession(
         Object.assign(data, { allProfession: { name: 'Все профессии' } })
      )); */

      // 2 способ
      api.professions.fetchAll().then((data) => setProfession(data));
   }, []);

   const handleProfessionSelect = (item) => {
      setSelectedProf(item);
   };

   const handlePageChange = (pageIndex) => {
      setCurrenPage(pageIndex);
   };

   // 1 способ
   // const filteredUsers = selectedProf && selectedProf._id ? allUsers.filter((user) => user.profession === selectedProf) : allUsers;

   // 2 способ
   const filteredUsers = selectedProf ? allUsers.filter((user) => user.profession === selectedProf) : allUsers;

   const userCrop = paginate(filteredUsers, currentPage, pageSize);

   const clearFilter = () => {
      setSelectedProf();
   };

   return (
      <>
         {professions && (
            <>
               <GroupList items={professions} selectedItem={selectedProf} onItemSelect={handleProfessionSelect} />
               <button className='btn btn-outline-secondary m-2' onClick={clearFilter}>Очистить</button>
            </>
         )}
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
