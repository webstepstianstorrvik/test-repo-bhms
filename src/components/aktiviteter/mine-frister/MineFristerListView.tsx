import React, { useState } from 'react'
import Table from '../../common/Table'
import { Aktivitet } from './MineFrister'

import { createColumnHelper } from '@tanstack/react-table'

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
            <div className="buttons-wrapper">
                <select
                    className="form-select"
                    onChange={(event) => setFilter(event.target.value)}
                >
                    <option>Aktive</option>
                    <option>Stoppet</option>
                </select>
                <button className="btn btn-primary">Ny aktivitet</button>
            </div>
            <Table data={filteredData} columns={columns} />
        </div>
    )
}

export default MineFristerListView
