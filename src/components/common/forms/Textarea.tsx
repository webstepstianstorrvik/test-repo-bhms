import React from 'react'

interface ITextareaProps {
    className?: string
    id: string
    label: string
    name: string
    onChange: (event: any) => void
    placeholder?: string
    required?: boolean
    value: string
}

const Textarea = ({
    className = '',
    id,
    label,
    name,
    onChange,
    placeholder,
    required = true,
    value,
}: ITextareaProps) => {
    return (
        <div className={`${className}`}>
            <label className="form__label" htmlFor={id}>
                {label}
            </label>
            <textarea
                className="form__control"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default Textarea
