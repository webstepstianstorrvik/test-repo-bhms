import React from 'react'

interface IStatusButtonProps {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    fullWidth?: boolean
    onClick?: (event: any) => void
    status?: 'success' | 'warning' | 'error' | 'info'
}

const StatusButton = ({
    children,
    className = '',
    disabled = false,
    fullWidth = false,
    onClick,
    status = 'info',
}: IStatusButtonProps) => {
    return (
        <button
            className={`btn btn-status ${status} ${className}`}
            disabled={disabled}
            onClick={onClick}
            style={fullWidth ? { width: '100%' } : {}}
            type="button"
        >
            {children}
        </button>
    )
}

export default StatusButton
