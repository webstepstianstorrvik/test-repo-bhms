import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import './assets/css/polyfill/bootstrap.css';
import './main.css';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Brukerstotte from './components/brukerstotte/Brukerstotte.js';
import VideoList from './components/brukerstotte/VideoList.js';
import Startside from './components/startside/Startside.js';
import Risikovurdering from './components/risikovurdering/Risikovurdering.js';
import Kontakter from './components/kontakter/Kontakter.js';
import Arkiv from './components/arkiv/Arkiv.js';
import Snarveier from './components/snarveier/Snarveier.js';
import Bilder from './components/bilder/Bilder.js';
import Nyheter from './components/nyheter/Nyheter.js';
import Innstillinger from './components/Innstillinger/Instillinger.js';
import Handbok from './components/handbok/Handbok.js';
import Aktiviteter from './components/aktiviteter/Aktiviteter.js';
import Avviktiltak from './components/avviktiltak/Avviktiltak.js';
import KontaktBoligbyggelaget from './components/brukerstotte/KontaktBoligbyggelaget.js';
import OfteStilteSpoersmal from './components/brukerstotte/OfteStilteSpoersmal.js';


render(
    <Router>
        <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Startside />} />
            <Route path="handbok" element={<Handbok />} />
            <Route path="aktiviteter" element={<Aktiviteter />} />
            <Route path="avviktiltak" element={<Avviktiltak />} />
            <Route path="risikovurdering" element={<Risikovurdering />} />
            <Route path="kontakter" element={<Kontakter />} />
            <Route path="arkiv" element={<Arkiv />} />

            <Route path="snarveier" element={<Snarveier />} />
            <Route path="bilder" element={<Bilder />} />
            <Route path="nyheter" element={<Nyheter />} />
            <Route path="brukerstotte" element={<Brukerstotte />} />
                <Route path="brukerstotte/brukerveiledning" element={<VideoList videoType="brukerveiledning"/>} />
                <Route path="brukerstotte/kontakt-boligbyggelaget" element={<KontaktBoligbyggelaget />} />
                <Route path="brukerstotte/ofte-stilte-spoersmal" element={<OfteStilteSpoersmal />} />
                <Route path="brukerstotte/opplaeringsvideoer" element={<VideoList videoType="opplaeringsvideoer"/>} />
            <Route path="innstillinger" element={<Innstillinger />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <h1>404 NOT FOUND</h1>
                    </main>
                }
            />
        </Route>
        </Routes>
    </Router >,
    document.getElementById("root")
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
