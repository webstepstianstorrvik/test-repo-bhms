import React, { useState, useEffect, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import './assets/css/app.css'
import SidebarMenu from './components/menu/SidebarMenu'
import { useLocation } from 'react-router-dom'
import Heading from './components/common/Heading'
import { useAuth } from 'react-oidc-context'
import { useUser } from './hooks/useUser.jsx'

export const Context = createContext({ isMobile: false })

const App = () => {
    const location = useLocation()
    const auth = useAuth()
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const user = useUser()

    console.log(user)

    useEffect(() => {
        if (isMobile) {
            setIsMenuOpen(false)
        }
    }, [location, isMobile])

    useEffect(() => {
        setIsMobile(window.innerWidth <= 640)
    }, [])

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 640)
            if (window.innerWidth < 992) {
                setIsMenuOpen(false)
            }
            if (window.innerWidth >= 992) {
                setIsMenuOpen(true)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen((prevValue) => !prevValue)
    }

    return (
        
            <Context.Provider value={{ isMobile }}>
                <main>
                    <Header toggleMenu={toggleMenu} />
                    <div className="container">
                        {auth.isAuthenticated && (
                            <SidebarMenu isMenuOpen={isMenuOpen} />
                        )}
                        <section>
                            <div className="site-content">
                                <Heading />
                                <Outlet />
                            </div>
                        </section>
                    </div>
                    <Footer />
                </main>
            </Context.Provider>
    )
}

export default App
