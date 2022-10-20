import React from 'react'

const Checkboxes = ({
    className,
    id,
    label,
    name,
    onChange,
    options,
    placeholder,
    values = [],
}) => {
    return (
        <div className={`${className ?? ''}`}>
            <label className="form__label" htmlFor={id}>
                {label}
            </label>
            <div>
                {options.map((option) => (
                    <div className="form__control checkbox" key={option}>
                        <input
                            id={`${id}-${option}`}
                            name={name}
                            type="checkbox"
                            value={option}
                            onChange={onChange}
                            placeholder={placeholder}
                            checked={typeof values === "object" && values.includes(option)/*TODO: Remove typeof when refactoring to TS */}
                        />
                        <label
                            className="form__checkbox-label"
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

export default Checkboxes
