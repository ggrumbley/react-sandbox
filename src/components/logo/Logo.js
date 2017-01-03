import React, { Component } from 'react';
import { Link } from 'react-router'
import reactLogo from './react_logo.svg';
import './Logo.css';

class Logo extends Component {

  render() {
    const active = {
      color: '#ffffff',
      backgroundColor: '#008cba'
    };
    return (
      <div className="Logo">
        <div className="Logo-header">
          <img src={reactLogo} className="Logo-icon" alt="react icon" />
          <h2>React Sandbox</h2>
        </div>
        <p className="Logo-intro">
          There is no peeing in the React Sandbox.
        </p>
        <ul className="nav nav-pills">
          <li><Link to="/" activeStyle={active}>Home</Link></li>
          <li><Link to="/whiskeynotes" activeStyle={active}>WhiskeyNotes</Link></li>
        </ul>
      </div>
    );
  }
}

export default Logo;
