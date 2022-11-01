import 'react-toastify/dist/ReactToastify.css'
import './assets/css/polyfill/bootstrap.css'
import './assets/css/fonts.css'
import './index.css'
import './main.css'
import './common.css'
import './components/common/forms/forms.css'

import React from 'react'
import { AuthProvider } from 'react-oidc-context'
import { createRoot } from 'react-dom/client'
import Routes from './components/router/Routes'
import { setupMock } from './setup-mock-server'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import reportWebVitals from './reportWebVitals'

const oidcConfig = {
    authority: process.env.REACT_APP_STS_AUTHORITY ?? '',
    client_id: process.env.REACT_APP_CLIENT_ID ?? '',
    redirect_uri: process.env.REACT_APP_CLIENT_REDIRECT ?? '',
    post_logout_redirect_uri: process.env.REACT_APP_CLIENT_REDIRECT,
}

setupMock()

const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider {...oidcConfig}>
            <Routes />
        </AuthProvider>
    </QueryClientProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
