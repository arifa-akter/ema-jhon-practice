import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/order"}>Order</Link>
                    <Link to={"/orderReview"}>order Review</Link>
                    <Link to={"/manage"}>Manage Inventory</Link>
                </div>
             </div>
           </nav>
        </div>
    );
};

export default Header;