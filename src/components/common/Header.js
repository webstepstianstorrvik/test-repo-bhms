import '../../assets/css/fonts.css';

import React from 'react';
import './header.css';
import MenuIcon from '../../assets/img/icons/header/menu.svg'

const Header = ({toggleMenu}) => {

        return (
            <div className="header bg-bevarblue">
                <div className="container">
                    <div className="content">
                        <div className="desktop-header">
                            <div className="left-content center-content">
                                <img src={MenuIcon} className="menu-toggle-icon" onClick={() => toggleMenu()}/>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Header;
