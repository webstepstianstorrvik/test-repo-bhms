import '../../assets/css/fonts.css'
import '../../assets/css/colors.css'
import './card.css'

import React from 'react'

const Card = ({ children, className, title }) => {
    return (
        <div className={`card ${className}`}>
            {title && (
                <div className="card-header">
                    <h2 className="card-title">{title}</h2>
                </div>
            )}
            <div className="card-content">{children}</div>
        </div>
    )
}

export default Card
