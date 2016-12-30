import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default Logo;
