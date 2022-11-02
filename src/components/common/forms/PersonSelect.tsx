import React from 'react'
import { useAnsvarligePersoner } from '../../../hooks/useAnsvarligePersoner'

interface IPersonSelectProps {
    className?: string
    id: string
    label: string
    name: string
    onChange: (event: any) => void
    placeholder?: string
    required?: boolean
    value: string
}

const PesonSelect = ({
    className = '',
    id,
    label,
    name,
    onChange,
    placeholder,
    required = true,
    value,
}: IPersonSelectProps) => {
    const { data } = useAnsvarligePersoner()
    const options = data
        ? data
        : [
              {
                  navn: 'Styreleder',
                  kartotekId: 0,
                  gruppe: '',
              },
          ]

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
                {options
                    .filter(
                        ({ gruppe }) => gruppe !== 'BBL' && gruppe !== 'BRL'
                    )
                    .map(({ navn, kartotekId }) => (
                        <option key={kartotekId} value={kartotekId}>
                            {navn}
                        </option>
                    ))}
                <optgroup label={'Boligbyggelag'}>
                    {options
                        .filter(({ gruppe }) => gruppe === 'BBL')
                        .map(({ navn, kartotekId }) => (
                            <option key={kartotekId} value={kartotekId}>
                                {navn}
                            </option>
                        ))}
                </optgroup>
                <optgroup label={'Boligselskap'}>
                    {options
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
