import '../../assets/css/fonts.css'
import '../../assets/css/colors.css'
import './card.css'

import React, { ReactNode } from 'react'

interface ICardProps {
    children: ReactNode
    className?: string
    title?: string
}

const Card = ({ children, className, title }: ICardProps) => {
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
