import './assets/css/polyfill/bootstrap.css';
import './assets/css/fonts.css';
import './main.css';

import React from 'react';
import { AuthProvider } from 'oidc-react';
import {render} from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';


const oidcConfig = {
    onSignIn: () => {
      // Redirect?
      console.log("SIGNED IN!")
    },
    authority: process.env.REACT_APP_STS_AUTHORITY,
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: process.env.REACT_APP_CLIENT_REDIRECT
  };

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
