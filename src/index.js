import './assets/css/polyfill/bootstrap.css';
import './assets/css/fonts.css';
import './main.css';

import React from 'react';
import { AuthProvider } from 'react-oidc-context';
import {render} from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './components/router/Routes';


const oidcConfig = {
    authority: process.env.REACT_APP_STS_AUTHORITY,
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_CLIENT_REDIRECT,
    post_logout_redirect_uri: process.env.REACT_APP_CLIENT_REDIRECT
  };

console.log(oidcConfig);

render(
    <AuthProvider {...oidcConfig}>
        <Routes />
    </AuthProvider>,
    document.getElementById("root")
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
