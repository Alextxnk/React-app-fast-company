import React, { useState, useEffect } from 'react';
import { paginate } from '../../../utils/paginate';
import Pagination from '../../common/pagination';
import PropTypes from 'prop-types';
import GroupList from '../../common/groupList';
import SearchStatus from '../../ui/searchStatus';
import api from '../../../api';
import UsersTable from '../../ui/usersTable';
import _ from 'lodash';

const UsersListPage = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [professions, setProfession] = useState(api.professions.fetchAll());
   const [selectedProf, setSelectedProf] = useState();
   const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' });
   const [searchQuery, setSearchQuery] = useState('');
   const pageSize = 8;

   // работа с users
   const [users, setUsers] = useState();

   useEffect(() => {
      api.users.fetchAll().then((data) => setUsers(data));
   }, []);

   const handleDelete = (userId) => {
      setUsers(users.filter((user) => user._id !== userId));
   };

   const handleToggleBookMark = (id) => {
      setUsers(
         users.map((user) => {
            if (user._id === id) {
               return { ...user, bookmark: !user.bookmark };
            }
            return user;
         })
      );
   };

   useEffect(() => {
      api.professions.fetchAll().then((data) => setProfession(data));
   }, []);

   useEffect(() => {
      setCurrentPage(1);
   }, [selectedProf, searchQuery]);

   const handleProfessionSelect = (item) => {
      if (searchQuery !== '') setSearchQuery('');
      setSelectedProf(item);
   };

   const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex);
   };

   const handleSort = (item) => {
      setSortBy(item);
   };

   const handleSearchQuery = ({ target }) => {
      setSelectedProf(undefined);
      setSearchQuery(target.value);
   };

   if (users) {
      const filteredUsers = searchQuery
         ? users.filter(
            (user) =>
               user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
               -1
         )
         : selectedProf
            ? users.filter(
               (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
            )
            : users;

      const count = filteredUsers.length;
      const sortedUsers = _.orderBy(
         filteredUsers,
         [sortBy.path],
         [sortBy.order]
      );
      const userCrop = paginate(sortedUsers, currentPage, pageSize);

      const clearFilter = () => {
         setSelectedProf();
      };

      return (
         <div className='d-flex container'>
            {professions && (
               <div className='d-flex flex-column flex-shrink-0 p-3'>
                  <GroupList
                     items={professions}
                     selectedItem={selectedProf}
                     onItemSelect={handleProfessionSelect}
                  />
                  <button
                     className='btn btn-outline-secondary m-2'
                     onClick={clearFilter}
                  >
                     Очистить
                  </button>
               </div>
            )}
            <div className='d-flex flex-column'>
               <SearchStatus length={count} />
               <input
                  className='form-control'
                  type='text'
                  name='searchQuery'
                  placeholder='Поиск...'
                  onChange={handleSearchQuery}
                  value={searchQuery}
               />
               {count > 0 && (
                  <UsersTable
                     users={userCrop}
                     onSort={handleSort}
                     selectedSort={sortBy}
                     onDelete={handleDelete}
                     onToggleBookMark={handleToggleBookMark}
                  />
               )}
               <div className='d-flex justify-content-center'>
                  <Pagination
                     itemsCount={count}
                     pageSize={pageSize}
                     currentPage={currentPage}
                     onPageChange={handlePageChange}
                  />
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className='d-flex justify-content-center p-3'>
         <h3>Загрузка...</h3>
      </div>
   );
};

UsersListPage.propTypes = {
   users: PropTypes.array
};

export default UsersListPage;
