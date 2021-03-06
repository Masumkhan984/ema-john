import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
            </nav>
        </div>
    );
};

export default Header;