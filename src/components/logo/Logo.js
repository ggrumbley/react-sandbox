import React, { Component } from 'react';
import { Link } from 'react-router'
import reactLogo from './react_logo.svg';
import './Logo.css';

class Logo extends Component {
  render() {
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/whiskeynotes">WhiskeyNotes</Link></li>
        </ul>
      </div>
    );
  }
}

export default Logo;
