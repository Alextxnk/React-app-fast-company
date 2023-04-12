import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Users from './layouts/users';
import Login from './layouts/login';
import Main from './layouts/main';
import NavBar from './components/ui/navBar';
import NotFound from './layouts/notFound';

function App () {
   return (
      <div>
         <NavBar />
         <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login/:type?' element={<Login />} />
            <Route path='/users/:userId?' element={<Users />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
