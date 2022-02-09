import Brukerportal from './Brukerportal.js';
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './assets/css/polyfill/bootstrap.css';
import './main.css';
import reportWebVitals from './reportWebVitals';

const App = () => (
    <Router>
        <Routes>
            <Route path="/brukerportal" element={ <Brukerportal />} />
            <Route path="/" element={<Brukerportal />}/>
        </Routes>
    </Router>
);

render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
