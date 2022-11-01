import React from 'react'
import { useAnsvarligePersoner } from '../../../hooks/useAnsvarligePersoner'
import { Person } from '../../../types/common'

interface IPersonCheckboxesProps {
    className?: string
    id: string
    name: string
    onChange: (event: any) => void
    values: string[]
}

const PersonCheckboxes = ({
    className,
    id,
    name,
    onChange,
    values = [],
}: IPersonCheckboxesProps) => {
    const { data, isLoading } = useAnsvarligePersoner()

    if (isLoading || !data) {
        return null
    }

    const getCheckboxes = (persons: Person[]) =>
        persons.map(({ navn, kartotekId }) => (
            <div className="form__control checkbox" key={kartotekId}>
                <input
                    id={`${id}-${navn}`}
                    name={name}
                    type="checkbox"
                    value={navn}
                    onChange={onChange}
                    checked={
                        typeof values === 'object' &&
                        values?.includes(
                            navn
                        ) /*TODO: Remove typeof when refactoring to TS */
                    }
                />
                <label
                    className="form__checkbox-label"
                    htmlFor={`${id}-${navn}`}
                >
                    {navn}
                </label>
            </div>
        ))

    return (
        <div className={`${className ?? ''}`}>
            <div className="mbs">
                <label className="form__label">Kontakter</label>
                {getCheckboxes(
                    data.filter(
                        ({ gruppe }) => gruppe !== 'BBL' && gruppe !== 'BRL'
                    )
                )}
            </div>
            <div className="mbs">
                <label className="form__label">Boligbyggelag</label>
                {getCheckboxes(data.filter(({ gruppe }) => gruppe === 'BBL'))}
            </div>
            <div className="mbs">
                <label className="form__label">Boligselskap</label>
                {getCheckboxes(data.filter(({ gruppe }) => gruppe === 'BRL'))}
            </div>
        </div>
    )
}

export default PersonCheckboxes
