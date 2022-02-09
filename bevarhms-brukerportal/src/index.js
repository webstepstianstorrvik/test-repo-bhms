import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Content from './components/Content.js';
import reportWebVitals from './reportWebVitals';
import './assets/css/polyfill/bootstrap.css';
import './main.css';

ReactDOM.render(
  <React.StrictMode>
      <Header headertext="Veiledning" subheadertext="Brukerveiledning"/>
      <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
