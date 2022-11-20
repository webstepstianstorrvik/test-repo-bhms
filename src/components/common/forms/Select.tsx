import React from 'react'
import { NameValue } from '../../../types/common'

interface ISelectProps {
    className?: string
    id: string
    label?: string
    name: string
    onChange: (event: any) => void
    options: NameValue[] | string[] | number[]
    placeholder?: string
    required?: boolean
    value: string | number
}

const Select = ({
    className = '',
    id,
    label,
    name,
    onChange,
    options,
    placeholder,
    required = true,
    value,
}: ISelectProps) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label className="form__label" htmlFor={id}>
                    {label}
                </label>
            )}
            <select
                className="form__control"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            >
                {options.map((option) =>
                    typeof option === 'object' ? (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ) : (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    )
                )}
            </select>
        </div>
    )
}

export default Select