import React from 'react';
import logo from '../resource/img/logo.png';

const Navbar = () => {
  return (
    <div>
      <img className='logo' src={logo} alt='Wiley' />
      <hr />
    </div>
  );
};

export default Navbar;
