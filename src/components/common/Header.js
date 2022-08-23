import '../../assets/css/fonts.css';

import React, { useState, useContext } from 'react';
import { Context } from '../../App';
import { useAuth } from 'react-oidc-context';
import './header.css';
import MenuIconHover from '../../assets/img/icons/header/menu.svg'
import MenuIcon from '../../assets/img/icons/header/menu_expanded.svg'
import NotificationIcon from '../../assets/img/icons/header/notification.svg'
import ProfileIcon from '../../assets/img/icons/header/profile.svg'
import { Link } from 'react-router-dom';

const Header = ({toggleMenu}) => {
    const auth = useAuth();
    const { isMobile } = useContext(Context)
    const [isHovered, setIsHovered] = useState(false);

        return (
            <div className="header bg-bevarblue">
                <div className="container">
                    <div className="content">
                        <div className="desktop-header">
                            <div className="left-content center-content">
                                <img src={isHovered ? MenuIconHover : MenuIcon} className="menu-toggle-icon" alt="Menu toggle" onClick={() => toggleMenu()} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>
                                <div className="logo-content">
                                    <img className="header-logo" src="./img/bevarhms-hvit_compressed.svg" alt=""/>
                                </div>
                                <div className="y-auto">
                                    <div className="header-text"></div>
                                </div>
                            </div>
                            <div className="center-content">
                            </div>
                            <div className="right-content">
                                <Link to="#" className="header-icon">
                                    <img src={NotificationIcon} alt="Notification icon button"></img>
                                </Link>
                                <Link to="/profil" className="header-icon">
                                    <img  src={ProfileIcon} alt="Profile icon button"></img>
                                </Link>
                                {auth.isAuthenticated ? 
                                    <button className="logout-button" style={isMobile ? {"display": "none"} : {}} onClick={() => auth.signoutRedirect()}>Logg ut</button> :
                                    <button className="logout-button" style={isMobile ? {"display": "none"} : {}} onClick={() => void auth.signinRedirect()}>Logg inn</button> 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Header;
