import './assets/css/polyfill/bootstrap.css'
import './assets/css/fonts.css'
import './main.css'

import React from 'react'
import { AuthProvider } from 'react-oidc-context'
import { createRoot } from 'react-dom/client'
import Routes from './components/router/Routes'
import reportWebVitals from './reportWebVitals'

const oidcConfig = {
    authority: process.env.REACT_APP_STS_AUTHORITY ?? '',
    client_id: process.env.REACT_APP_CLIENT_ID ?? '',
    redirect_uri: process.env.REACT_APP_CLIENT_REDIRECT ?? '',
    post_logout_redirect_uri: process.env.REACT_APP_CLIENT_REDIRECT,
}

console.log(process.env)

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
    <AuthProvider {...oidcConfig}>
        <Routes />
    </AuthProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
