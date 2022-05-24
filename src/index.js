import React, { useEffect } from 'react';
import {render} from 'react-dom';
import App from './App.js';
import { useParams } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import './assets/css/polyfill/bootstrap.css';
import './main.css';
import reportWebVitals from './reportWebVitals';


function AppWithParams() {useEffect(() => {
    document.title = "BevarHMS Veiledning"
    }, []);
    let { pagePath,
        showVideoTitle
    } = useParams();
    return (<App page={pagePath} showVideoTitle={showVideoTitle}/>);
}

const Brukerportal = () => (
        <Router>
            <div>
                <Routes>
                    <Route index element={<Navigate to="/fagvideoer" />} />
                    <Route path=":pagePath" element={<AppWithParams />} />
                    <Route path=":pagePath/:showVideoTitle" element={<AppWithParams />} />
                </Routes>
            </div>
        </Router >
);
render(
    <Brukerportal />
    ,
    document.getElementById("root")
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
