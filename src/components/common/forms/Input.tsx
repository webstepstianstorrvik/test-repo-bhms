import React from 'react'

interface IInputProps {
    className?: string
    id: string
    label: string
    name: string
    onChange: (event: any) => void
    placeholder?: string
    required?: boolean
    value: string | number
    type?: string
}

const Input = ({
    className = '',
    id,
    label,
    name,
    onChange,
    placeholder,
    required = true,
    type = 'text',
    value,
}: IInputProps) => {
    return (
        <div className={`${className}`}>
            <label className="form__label" htmlFor={id}>
                {label}
            </label>
            <input
                className="form__control"
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default Input
