import React, { useState } from 'react';
import UsersList from './components/usersList';
import SearchStatus from './components/searchStatus';
import api from './api';

function App () {
   const [users, setUsers] = useState(api.users.fetchAll());

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
      // console.log(id);
   };

   return (
      <div>
         <SearchStatus length={users.length} />
         <UsersList onDelete={handleDelete} onToggleBookMark={handleToggleBookMark} users={users} />
      </div>
   );
}

export default App;
