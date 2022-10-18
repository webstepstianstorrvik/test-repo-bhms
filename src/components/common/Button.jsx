import React from 'react'

const Button = ({ children, fullWidth, onClick, size, type, variant = 'primary' }) => {
    return (
        <button
            className={`btn btn-${variant} ${size} `}
            onClick={onClick}
            style={fullWidth ? {width: '100%'}  : {}}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
