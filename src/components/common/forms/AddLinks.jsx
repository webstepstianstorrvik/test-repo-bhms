import React, { useState } from 'react'
import Button from '../Button'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
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

            {values.length ? (
                <div>
                    <label className="form__label">Valgte lenker:</label>
                    <ul className="phl">
                        {values.map((value) => (
                            <li key={value} className="flex justify-csb">
                                <a
                                    href={value}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {value}
                                </a>
                                <button className="icon-button">
                                    <FontAwesomeIcon
                                        className="cpointer"
                                        icon={faXmark}
                                        onClick={() =>
                                            onChange(
                                                generateEvent(value, false)
                                            )
                                        }
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
