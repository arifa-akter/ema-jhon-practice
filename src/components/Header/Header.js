import React from 'react';
import logo  from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='background'>
           <nav className='header-container'>
             <div className="menu-ber">
             <div className="logo">
                   <img src={logo} alt="logo" />
               </div>
                <div className="menu">
                    <a href="home">Order</a>
                    <a href="about">Order Review</a>
                    <a href="service">Manage Inventory</a>
                </div>
             </div>
           </nav>
        </div>
    );
};

export default Header;