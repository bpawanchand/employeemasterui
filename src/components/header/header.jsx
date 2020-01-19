import React from 'react';
import { Link } from 'react-router-dom';
const Header = props => {
  return (
    <div className='container-fluid '>
      <nav className='navbar navbar-expand-lg  navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          Employee
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#mainHeader'
          aria-controls='mainHeader'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </nav>
    </div>
  );
};

export default Header;
