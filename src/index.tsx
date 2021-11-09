import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/Login';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
      <LoginForm />
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

