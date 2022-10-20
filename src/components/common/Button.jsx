import React from 'react'

const Button = ({ children, className, fullWidth, onClick, size, type, variant = 'primary' }) => {
    return (
        <button
            className={`btn btn-${variant} ${size} ${className ?? ''}`}
            onClick={onClick}
            style={fullWidth ? {width: '100%'}  : {}}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
