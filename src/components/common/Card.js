import '../../assets/css/fonts.css';
import './card.css';

import React from 'react';

const Card = ({children, className}) => {

    return (
        <div className={`card ${className}`}>
            <div className="card-content">
                { children }
            </div>
        </div>
    );
}

export default Card;
