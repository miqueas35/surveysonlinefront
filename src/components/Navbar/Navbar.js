import React from 'react';
import logo from '../../img/check.png';
import '../../css/styles.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid justify-content-between'>
        <div className='d-flex'>
          <img src={logo} alt="logo" className='img-icon' />
          <h2 className='m-3'>Encuestas Online</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
