import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import './assets/css/app.css';
import SidebarMenu from './components/menu/SidebarMenu.js';


const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const toggleMenu = () => {
        setIsMenuOpen(prevValue => !prevValue)
    }

    return (
        <main>
            <Header toggleMenu={toggleMenu}/>
            <div className="container">
                <SidebarMenu isMenuOpen={isMenuOpen}/>
                <div className="site-content">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default App;
