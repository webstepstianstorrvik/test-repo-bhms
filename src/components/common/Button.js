import './button.css'
import '../../assets/css/fonts.css'

import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const Button = ({ title, icon, link }) => {
    return (
        <Card className="button-wrapper">
            <Link to={link} className="button-link">
                <button className="button">
                    <img src={icon} alt={title} />
                    <h3 className="button-title">{title}</h3>
                </button>
            </Link>
        </Card>
    )
}

export default Button
