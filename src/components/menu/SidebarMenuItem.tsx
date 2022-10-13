import React from 'react'
import { NavLink } from 'react-router-dom'

interface IMenuItemProps {
    title: string
    itemUrl: string
    itemImgUrl: string
    isMenuOpen: boolean
}

const MenuItem = ({
    title,
    itemUrl,
    itemImgUrl,
    isMenuOpen,
}: IMenuItemProps) => {
    return (
        <NavLink
            end={itemUrl === '/'}
            className={({ isActive }) =>
                isActive ? 'sidebarmenu-item active' : 'sidebarmenu-item'
            }
            to={itemUrl}
        >
            <img
                src={itemImgUrl}
                className="sidebarmenu-item-img"
                alt={title}
            />
            <div
                className="sidebarmenu-item-title"
                style={isMenuOpen ? {} : { display: 'none' }}
            >
                {title}
            </div>
        </NavLink>
    )
}

export default MenuItem
