import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({title, itemUrl, itemImgUrl, isMenuOpen}) => {

    return (
        <NavLink className={({ isActive }) => isActive ? "sidebarmenu-item active" : "sidebarmenu-item"} to={itemUrl}>
            <img src={itemImgUrl} className="sidebarmenu-item-img" alt={title}/>
            <div className="sidebarmenu-item-title" style={isMenuOpen ? {} : {"display": "none"}}>{title}</div>
        </NavLink>
    );
}

export default MenuItem;
