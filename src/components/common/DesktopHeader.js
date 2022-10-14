import React from 'react'
import MenuIcon from '../../assets/img/icons/header/menu.svg'

const DesktopHeader = ({ text }) => {
    return (
        <div className="desktop-header">
            <div className="left-content center-content">
                <img src={MenuIcon} className="menu-toggle-icon" />
                <div className="logo-content">
                    <img
                        className="header-logo"
                        src="./img/bevarhms-hvit_compressed.svg"
                        alt=""
                    />
                </div>
                <div className="y-auto">
                    <div className="header-text">{text}</div>
                </div>
            </div>
            <div className="center-content"></div>
            <div className="right-content"></div>
        </div>
    )
}

export default DesktopHeader
