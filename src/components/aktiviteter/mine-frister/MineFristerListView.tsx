import React, { useState } from 'react'
import Table from '../../common/Table'
import { Aktivitet } from './MineFrister'

interface IMineFristerListViewProps {
    events: Aktivitet[]
}

const MineFristerListView = ({ events }: IMineFristerListViewProps) => {
    const [filter, setFilter] = useState('Aktive')

    const columns = React.useMemo(
        () => [
            {
                header: 'Tittel',
                accessor: 'tittel',
            },
            {
                header: 'Hyppighet',
                accessor: 'hyppighet',
            },
            {
                header: 'Neste frist',
                accessor: 'nesteFrist',
            },
            {
                header: 'Sist utført',
                accessor: 'sistUtført',
            },
            {
                header: 'Ansvarlige',
                accessor: 'ansvarlige',
            },
        ],
        []
    )

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
