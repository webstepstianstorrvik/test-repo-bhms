import React, { useState } from 'react'
import Table from '../../common/Table'
import { Aktivitet } from './MineFrister'

import { createColumnHelper } from '@tanstack/react-table'
import Select from '../../common/forms/Select'
import Button from '../../common/Button'
import { NavLink } from 'react-router-dom'

interface IMineFristerListViewProps {
    events: Aktivitet[]
}

const MineFristerListView = ({ events }: IMineFristerListViewProps) => {
    const [filter, setFilter] = useState('Aktive')

    const columnHelper = createColumnHelper<Aktivitet>()

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

    const filteredData = events.filter((row) =>
        filter === 'Aktive' ? row.isActive : !row.isActive
    )

    return (
        <div className="list-view">
            <div className="flex ml-auto">
                <Select
                    className="wauto mb0 mrm"
                    id="aktivitet-status-filter"
                    name="aktivitet-status-filter"
                    onChange={(event) => setFilter(event.target.value)}
                    options={['Alle', 'Aktive', 'Deaktiverte']}
                    value={filter}
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
