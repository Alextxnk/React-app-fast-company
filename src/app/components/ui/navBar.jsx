import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <>
         {/* <ul className='nav'>
            <li className='nav-item'>
               <Link className='nav-link' to='/' aria-current='page'>
                  Главная
               </Link>
            </li>
            <li className='nav-item'>
               <Link className='nav-link' to='/login' aria-current='page'>
                  Вход
               </Link>
            </li>
            <li className='nav-item'>
               <Link className='nav-link' to='/users' aria-current='page'>
                  Пользователи
               </Link>
            </li>
         </ul> */}

         <nav className='navbar navbar-expand-md navbar-light bg-white mb-4 shadow-sm'>
            <div className='container'>
               <Link className='navbar-brand ' to='/' aria-current='page'>
                  Fast company
               </Link>

               <div
                  className='collapse navbar-collapse'
                  id='navbarSupportedContent'
               >
                  {/* Left Side Of Navbar */}
                  <ul className='navbar-nav mr-auto'>
                     <li className='nav-item'>
                        <Link
                           className='nav-link'
                           to='/users'
                           aria-current='page'
                        >
                           Пользователи
                        </Link>
                     </li>
                  </ul>

                  {/* Right Side Of Navbar */}
                  <ul className='navbar-nav ml-auto'>
                     <li className='nav-item'>
                        <Link
                           className='nav-link'
                           to='/login'
                           aria-current='page'
                        >
                           Вход
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
};

export default NavBar;
