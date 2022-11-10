import React, { useState } from 'react'
import Button from '../Button'
import { faLink, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import isUrl from 'is-url'
import { toast } from 'react-toastify'

interface IAddLinksProps {
    className?: string
    id: string
    label: string
    name: string
    onChange: (event: any) => void
    placeholder?: string
    values: string[]
    type?: string
}

const AddLinks = ({
    className = '',
    id,
    label,
    name,
    onChange,
    placeholder,
    values,
    type = 'text',
}: IAddLinksProps) => {
    const [input, setInput] = useState('')

    const generateEvent = (value: string, isChecked: boolean) => {
        return { target: { type: 'checkbox', checked: isChecked, value, name } }
    }

    const handleButtonClick = () => {
        if (isUrl(input)) {
            onChange(generateEvent(input, true))
            setInput('')
        } else {
            toast.error(`'${input}' is not a valid url`)
        }
    }

    return (
        <div className={`multi-input ${className}`}>
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
                    />
                </div>
                <Button className="align-sc mts" onClick={handleButtonClick}>
                    Legg til
                </Button>
            </div>

            {values?.length ? (
                <div>
                    <label className="form__label">Valgte lenker:</label>
                    <ul className="phl">
                        {values.map((value) => (
                            <li key={value} className="flex justify-csb pvs">
                                <span className="text-nowrap">
                                    <a
                                        href={value}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            className="cpointer mrs"
                                            icon={faLink}
                                            color="#5e6e82"
                                            onClick={() =>
                                                onChange(
                                                    generateEvent(value, false)
                                                )
                                            }
                                        />
                                        {value}
                                    </a>
                                </span>
                                <button
                                    className="icon-button mll"
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
