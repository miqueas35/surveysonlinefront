import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/check.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../css/navStyles.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg d-flex'>
      <div className='container'>
        <div className='d-flex'>
          <img src={logo} alt="logo" className='img-logo' />
          <h2 className='m-auto'>Encuestas Online</h2>
          <div className="dropdown m-auto">
            <button className="btn btn-coin dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
              <i className='bi bi-search'></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <Link to='/login' className='btn btn-coin m-auto'><i className='bi bi-door-open'></i></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
