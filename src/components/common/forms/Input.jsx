import React from 'react'

const Input = ({
    className,
    id,
    label,
    name,
    onChange,
    placeholder,
    required = true,
    value,
}) => {
    return (
        <div className={`${className ?? ''}`}>
            <label className="form__label" htmlFor={id}>
                {label}
            </label>
            <input
                className="form__control"
                id={id}
                name={name}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default Input
