import React from 'react'
import './index.scss';
import logo from './../../../assets/images/logo.svg';

export default props => (
    <header className="header mx-auto">
        <a href="/" className="logo"><img src={logo} className="logo" alt="logo" /></a>
    </header>
);
  
  