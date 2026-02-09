import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';


export const NavBar = () => {
  return (
    <> 
      <nav className='navbar'>
       <div className='logo'>To Do App </div>
          <ul className='nav-links'>
           <Link to="/"> Lists </Link>
           <Link to="/dashboard"> Add Task </Link>
          </ul>

      </nav>
    
    </>
  )
}
