import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import './assets/css/app.css';
import SidebarMenu from './components/menu/SidebarMenu.js';
import { useLocation } from "react-router-dom";


const App = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [isMobile, setIsMobile] = useState();

    useEffect(() => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
      }, [location]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 640);
  }, []);

  useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth <= 640);
        if (window.innerWidth < 992) {
            setIsMenuOpen(false)
        }
        if (window.innerWidth >= 992) {
            setIsMenuOpen(true)
        }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prevValue => !prevValue)
    }

    

    return (
        <main>
            <Header toggleMenu={toggleMenu}/>
            <div className="container">
                <SidebarMenu isMenuOpen={isMenuOpen} isMobile={isMobile}/>
                <div className="site-content">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default App;
