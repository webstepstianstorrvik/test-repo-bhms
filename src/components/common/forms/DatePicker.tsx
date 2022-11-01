import React from 'react'

interface IDatePickerProps {
    className?: string
    id: string
    label: string
    name: string
    onChange: (event: any) => void
    placeholder?: string
    required?: boolean
    value: string
}

const DatePicker = ({
    className = '',
    id,
    label,
    name,
    onChange,
    placeholder,
    required = true,
    value,
}: IDatePickerProps) => {
    return (
        <div className={`${className}`}>
            <label className="form__label" htmlFor={id}>
                {label}
            </label>
            <input
                className="form__control datepicker-input"
                id={id}
                name={name}
                type="date"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default DatePicker
