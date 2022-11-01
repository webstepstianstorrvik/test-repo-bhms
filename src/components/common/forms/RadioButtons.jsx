import React from 'react'

const RadioButtons = ({
    className,
    id,
    label,
    name,
    onChange,
    options,
    placeholder,
    value,
}) => {
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
