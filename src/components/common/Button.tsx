import React from 'react'

interface IButtonProps {
    children: React.ReactNode
    className: string
    fullWidth: boolean
    onClick: () => void
    size: string
    type: 'button' | 'submit' | 'reset'
    variant: 'primary' | 'secondary'
}

const Button = ({
    children,
    className,
    fullWidth,
    onClick,
    size,
    type = 'button',
    variant = 'primary',
}: IButtonProps) => {
    return (
        <button
            className={`btn btn-${variant} ${size} ${className ?? ''}`}
            onClick={onClick}
            style={fullWidth ? { width: '100%' } : {}}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
