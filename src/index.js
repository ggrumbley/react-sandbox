import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/logo/Logo';
import Sheets from './components/Sheets';
import data from './data';

ReactDOM.render(
  <div>
    <Logo />
    <Sheets headers={data.headers} initialData={data.body} />
  </div>,
  document.getElementById('root')
);
