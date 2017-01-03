import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/yeti/bootstrap.min.css';

import dataStore from './dataStore';
import Button from './components/button/Button';
import Logo from './components/logo/Logo';
import Sheets from './components/Sheets';
import Suggest from './components/suggest/Suggest';
import Rating from './components/rating/Rating';
import FormInput from './components/form-input/FormInput'
import Form from './components/form/Form'
import Actions from './components/actions/Actions'

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if (!headers) {
  headers = dataStore.headers;
  data = dataStore.body;
}
ReactDOM.render(
  <div>
    <Logo />
    <div className="container">
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

    <h2>Form Inputs</h2>
    <table>
      <tbody>
        <tr>
          <td>Vanilla Input</td>
          <td>FormInput</td>
        </tr>
        <tr>
          <td>Prefilled</td>
          <td><FormInput defaultValue="it's like a default" /></td>
        </tr>
        <tr>
          <td>Year</td>
          <td>
            <FormInput type="year"/>
          </td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>
            <FormInput type="rating" defaultValue="{4}" />
          </td>
        </tr>
        <tr>
          <td>Suggest</td>
          <td>
            <FormInput
                type="suggest"
                options={['Tycho', 'Com Truise', 'Night Drive', 'Megadrive']}
            />
          </td>
        </tr>
        <tr>
          <td>Vanilla Textarea</td>
          <td>
            <FormInput type="text" />
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Forms</h2>
    <Form
      fields={[
        {label: 'Rating', type: 'rating', id: 'rateme'},
        {label: 'Greetings', id: 'freetext'},
      ]}
      initialData={ {rateme: 4, freetext: 'Hello'} }
    />

    <h2>Actions</h2>
    <div>
      <Actions onAction={type => alert(type)} />
    </div>
  </div>
</div>,
  document.getElementById('root')
);
