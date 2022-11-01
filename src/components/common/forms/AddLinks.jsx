import React, { useState } from 'react'
import Button from '../Button'
import { faLink, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddLinks = ({
    className,
    id,
    label,
    name,
    onChange,
    placeholder,
    required = true,
    type = 'text',
    values,
}) => {
    const [input, setInput] = useState('')

    const generateEvent = (value, isChecked) => {
        return { target: { type: 'checkbox', checked: isChecked, value, name } }
    }

    const handleButtonClick = (e) => {
        e.preventDefault()
        onChange(generateEvent(input, true))
        setInput('')
    }

    return (
        <div className={`multi-input ${className ?? ''}`}>
            <div className="flex">
                <div className="flex-1 mrm">
                    <label className="form__label" htmlFor={id}>
                        {label}
                    </label>
                    <input
                        className="form__control"
                        id={id}
                        name={name}
                        type={type}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={placeholder}
                        required={required}
                    />
                </div>
                <Button
                    className="align-sc mts"
                    onClick={(e) => handleButtonClick(e)}
                >
                    Legg til
                </Button>
            </div>

            {values?.length ? (
                <div>
                    <label className="form__label">Valgte lenker:</label>
                    <ul className="phl">
                        {values.map((value) => (
                            <li key={value} className="flex justify-csb pvs">
                                <div>
                                    <button className="icon-button">
                                        <FontAwesomeIcon
                                            className="cpointer"
                                            icon={faLink}
                                            color="#5e6e82"
                                            onClick={() =>
                                                onChange(
                                                    generateEvent(value, false)
                                                )
                                            }
                                        />
                                    </button>
                                    <a
                                        href={value}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {value}
                                    </a>
                                </div>
                                <button
                                    className="icon-button"
                                    onClick={() =>
                                        onChange(generateEvent(value, false))
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        color="#5e6e82"
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <span className="phm">Ingen lenker lagt til</span>
            )}
        </div>
    )
}

export default AddLinks
