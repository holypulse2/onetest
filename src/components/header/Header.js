import React from 'react'
import './Header.scss';
import logo from '../../assets/images/logo.svg';

export default props => (
    <header className="header">
        <a href="/" className="logo"><img src={logo} className="logo" alt="logo" /></a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span><span className="menu-span">Menu</span></label>
        <ul className="menu">
            <li><a href="#1">1</a></li>
            <li><a href="#2">2</a></li>
            <li><a href="#3">3</a></li>
            <li><a href="#4">4</a></li>
        </ul>
    </header>
);
  
  