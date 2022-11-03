import React from 'react';
import logo from '../../img/check.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid justify-content-center'>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
