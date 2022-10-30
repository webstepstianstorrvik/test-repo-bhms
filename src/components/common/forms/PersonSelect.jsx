import React from 'react'
import { useAnsvarligePersoner } from '../../../hooks/useAnsvarligePersoner'

const PesonSelect = ({
    className,
    id,
    label,
    name,
    onChange,
    placeholder,
    required = true,
    value,
}) => {
    const { data, isLoading } = useAnsvarligePersoner()

    if (isLoading) {
        return null
    }

    return (
        <div className={`${className ?? ''}`}>
            <label className="form__label" htmlFor={id}>
                {label}
            </label>
            <select
                className="form__control"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            >
                {data
                    .filter(
                        ({ gruppe }) => gruppe !== 'BBL' && gruppe !== 'BRL'
                    )
                    .map(({ navn, kartotekId }) => (
                        <option key={kartotekId} value={kartotekId}>
                            {navn}
                        </option>
                    ))}
                <optgroup label={'Boligbyggelag'}>
                    {data
                        .filter(({ gruppe }) => gruppe === 'BBL')
                        .map(({ navn, kartotekId }) => (
                            <option key={kartotekId} value={kartotekId}>
                                {navn}
                            </option>
                        ))}
                </optgroup>
                <optgroup label={'Boligselskap'}>
                    {data
                        .filter(({ gruppe }) => gruppe === 'BRL')
                        .map(({ navn, kartotekId }) => (
                            <option key={kartotekId} value={kartotekId}>
                                {navn}
                            </option>
                        ))}
                </optgroup>
            </select>
        </div>
    )
}

export default PesonSelect
