import React from 'react'

interface IRadioButtonsProps {
    className?: string
    id: string
    label: string
    name: string
    onChange: (event: any) => void
    options: string[]
    placeholder?: string
    required?: boolean
    value: string
}

const RadioButtons = ({
    className = '',
    id,
    label,
    name,
    onChange,
    options,
    placeholder,
    required = true,
    value,
}: IRadioButtonsProps) => {
    return (
        <div className={`${className ?? ''}`}>
            <label className="form__label" htmlFor={id}>
                {label}
            </label>
            <div className="flex">
                {options.map((option) => (
                    <div className="form__control radio" key={option}>
                        <input
                            id={`${id}-${option}`}
                            name={name}
                            type="radio"
                            value={option}
                            onChange={onChange}
                            placeholder={placeholder}
                            checked={value === option}
                            required={required}
                        />
                        <label
                            className="form__radio-label"
                            htmlFor={`${id}-${option}`}
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RadioButtons
