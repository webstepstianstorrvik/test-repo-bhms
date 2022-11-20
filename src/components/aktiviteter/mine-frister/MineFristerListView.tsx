import React, { useState } from 'react'
import Table from '../../common/Table'
import { Frist } from './MineFrister'

import { createColumnHelper } from '@tanstack/react-table'
import Select from '../../common/forms/Select'
import Button from '../../common/Button'
import { NavLink } from 'react-router-dom'
import { useAktiviteter } from '../../../hooks/useAktiviteter'
import { NameValue } from '../../../types/common'
import { useSearchParams } from 'react-router-dom'

interface IMineFristerListViewProps {
    events: Frist[]
}

const MineFristerListView = ({ events }: IMineFristerListViewProps) => {
    const { data } = useAktiviteter()
    const [searchParams, setSearchParams] = useSearchParams()
    const [statusFilter, setStatusFilter] = useState('Aktive')

    const aktivitetFilter = searchParams.get("aktivitet") ?? "Alle"

    const aktiviteterFilterOptions = [
        { name: 'Alle', value: 'Alle' },
        ...(data?.resultData.map(
            ({ tittel, aktivitetId }) =>
                ({ name: tittel, value: aktivitetId } as NameValue)
        ) ?? []),
    ].sort((a, b) => a.name.localeCompare(b.name))

    const columnHelper = createColumnHelper<Frist>()

    const columns = [
        columnHelper.accessor('tittel', {
            cell: (info) => info.getValue(),
            header: () => <span>Tittel</span>,
        }),
        columnHelper.accessor('hyppighet', {
            cell: (info) => info.getValue(),
            header: () => <span>Hyppighet</span>,
        }),
        columnHelper.accessor('nesteFrist', {
            cell: (info) => info.getValue(),
            header: () => <span>Neste frist</span>,
        }),
        columnHelper.accessor('sistUtført', {
            cell: (info) => info.getValue(),
            header: () => <span>Sist utført</span>,
        }),
        columnHelper.accessor('ansvarlige', {
            cell: (info) => info.getValue(),
            header: () => <span>Ansvarlige</span>,
        }),
    ]

    const filteredData = events
        .filter(({ isActive }) =>
            statusFilter === 'Aktive' ? isActive : !isActive
        )
        .filter(
            ({ aktivitetId }) =>
                aktivitetFilter === aktivitetId.toString() || aktivitetFilter === 'Alle'
        )

    const updateSearchParams = (key: string, value: string) => {
        searchParams.set(key, value)
        setSearchParams(searchParams)
    }

    return (
        <div className="list-view">
            <div className="flex ml-auto">
                <Select
                    className="wauto mb0 mrm"
                    id="mine-frister-aktivitet-filter"
                    name="mine-frister-aktivitet-filter"
                    onChange={(event) => updateSearchParams("aktivitet", event.target.value)}
                    options={aktiviteterFilterOptions}
                    value={aktivitetFilter}
                />
                <Select
                    className="wauto mb0 mrm"
                    id="aktivitet-status-filter"
                    name="aktivitet-status-filter"
                    onChange={(event) => setStatusFilter(event.target.value)}
                    options={['Alle', 'Aktive', 'Deaktiverte']}
                    value={statusFilter}
                />
                <NavLink to="#">
                    <Button>Legg til ny frist</Button>
                </NavLink>
            </div>
            <Table data={filteredData} columns={columns} />
        </div>
    )
}

export default MineFristerListView
