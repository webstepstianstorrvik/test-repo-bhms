import React from 'react'

const Button = ({ children, onClick, size, type = 'primary' }) => {
    return (
        <button className={`btn btn-${type} ${size}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
