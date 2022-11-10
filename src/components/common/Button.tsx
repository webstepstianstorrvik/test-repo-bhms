import './button.css'
import React from 'react'

interface IButtonProps {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    fullWidth?: boolean
    onClick?: (event: any) => void
    size?: 'small' | 'medium' | 'large'
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'icon'
}

const Button = ({
    children,
    className = '',
    disabled = false,
    fullWidth = false,
    onClick,
    size = 'medium',
    type = 'button',
    variant = 'primary',
}: IButtonProps) => {
    return (
        <button
            className={`btn btn-${variant} btn-${size} ${className}`}
            disabled={disabled}
            onClick={onClick}
            style={fullWidth ? { width: '100%' } : {}}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
