import React, { useState } from 'react';
import api from '../api';


const Users = () => {
   const [users, setUsers] = useState(api.users.fetchAll());
   const handleDelete = userId => {

   };

   return (
      <>
         <span className={'badge bg-' + (users.length > 0 ? 'primary' : 'danger')}>
            Готовы с тобой тусануть
         </span>
         <table className='table'>
            <thead>
               <tr>
                  <th scope="col">Имя</th>
                  <th scope="col">Качества</th>
                  <th scope="col">Профессия</th>
                  <th scope="col">Встретился, раз</th>
                  <th scope="col">Оценка</th>
                  <th />
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <tr key={user._id}>
                     <td>{user.name}</td>
                     <td>{user.qualities.map(item => <span className={'badge m-1 bg-' + item.color} key={item._id}>{item.name}</span>)}</td>
                     <td>{user.profession.name}</td>
                     <td>{user.completedMeetings}</td>
                     <td>{user.rate}</td>
                     <td>
                        <button className={'btn btn-danger'} onClick={() => handleDelete(user._id)}>
                           Удалить
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
};

export default Users;
