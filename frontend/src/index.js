import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rooms from './Rooms';
import FormUpload from './FormUpload';
ReactDOM.render(
  <React.StrictMode>
    <Rooms />
    <div>
    <FormUpload />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

