import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/yeti/bootstrap.min.css';

import dataStore from './dataStore';
import Button from './components/button/Button';
import Logo from './components/logo/Logo';
import Sheets from './components/Sheets';
import Suggest from './components/suggest/Suggest';
import Rating from './components/rating/Rating';

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if (!headers) {
  headers = dataStore.headers;
  data = dataStore.body;
}
ReactDOM.render(
  <div>
    <Logo />
    <Sheets headers={headers} initialData={data} />

    <h2>Buttons</h2>
    <div>Button with onClick: <Button className="btn btn-danger" onClick={() => alert('ouch')}>Click me</Button></div>
    <div>A link: <Button href="http://reactjs.com">Follow me</Button></div>
    <div>Custom class name: <Button className="btn btn-info">I do nothing</Button></div>

    <h2>Suggest</h2>
    <div><Suggest options={['Tycho', 'Com Truise', 'Night Drive', 'Megadrive']} /></div>

    <h2>Rating</h2>
    <div>No initial value: <Rating /></div>
    <div>Initial value 4: <Rating defaultValue={4} /></div>
    <div>This one goes to 11: <Rating max={11}/></div>
    <div>Read-only: <Rating readonly={true} defaultValue={3} /></div>

</div>,
  document.getElementById('root')
);
