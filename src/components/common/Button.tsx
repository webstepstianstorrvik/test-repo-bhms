import React from 'react'

interface IButtonProps {
    children: React.ReactNode
    className?: string
    fullWidth?: boolean
    onClick: (event: any) => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary'
}

const Button = ({
    children,
    className = '',
    fullWidth = false,
    onClick,
    type = 'button',
    variant = 'primary',
}: IButtonProps) => {
    return (
        <button
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
            style={fullWidth ? { width: '100%' } : {}}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
