import React from 'react';
import logo from '../../img/check.png';
import '../../css/navStyles.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid space-around'>
        <div className='d-flex'>
          <img src={logo} alt="logo" className='img-logo' />
          <h2 className='m-3'>Encuestas Online</h2>
          <button type='button' className='btn btn-coin m-2'>Buscar</button>
          <button href='' type='button' className='btn btn-coin m-2'>Ingresar</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
