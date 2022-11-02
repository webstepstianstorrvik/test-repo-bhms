import React, { useState } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { Aktivitet } from '../../../types/aktiviteter'
import Table from '../../common/Table'
import { useAktiviteter } from '../../../hooks/useAktiviteter'
import Button from '../../common/Button'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import StatusButton from '../../common/StatusButton'
import Spinner from '../../common/Spinner'

const Oversikt = () => {
    const { data, isLoading } = useAktiviteter()
    const [filter, setFilter] = useState('Alle')

    const columnHelper = createColumnHelper<Aktivitet>()

    const columns = [
        columnHelper.accessor('tittel', {
            cell: (info) => info.getValue(),
            header: () => <span>Tittel</span>,
        }),
        columnHelper.accessor('repetisjon', {
            cell: (info) => info.getValue(),
            header: () => <span>Hyppighet</span>,
        }),
        columnHelper.accessor('fristDato', {
            cell: (info) => (
                <StatusButton status="success">
                    {info.getValue()}{' '}
                    <FontAwesomeIcon
                        className="mls"
                        icon={faArrowUpRightFromSquare}
                    />
                </StatusButton>
            ),
            header: () => <span>Neste frist</span>,
        }),
        columnHelper.accessor('ansvarligUtforelse', {
            cell: (info) => info.getValue(),
            header: () => <span>Ansvarlig utførelse</span>,
        }),
        columnHelper.accessor('status', {
            cell: (info) => info.getValue(),
            header: () => <span>Status</span>,
        }),
        columnHelper.accessor('aktivitetId', {
            cell: (info) => (
                <NavLink to={`/aktiviteter/aktivitet/${info.getValue()}`}>
                    <button className="icon-button">
                        <FontAwesomeIcon
                            className="scale12 mrs"
                            icon={faPenToSquare}
                        />
                        Rediger
                    </button>
                </NavLink>
            ),
            header: () => <span>Detaljer</span>,
        }),
    ]

    const filteredData = data?.resultData.filter(({ status }) =>
        filter === 'Alle'
            ? true
            : filter === 'Aktive'
            ? status === 'Aktiv'
            : status === 'Deaktivert'
    )

    if (isLoading) {
        return <Spinner />
    }

    if (!filteredData || !filteredData.length) {
        return <p>Ingen aktiviteter</p>
    }

    return (
        <>
            <div className="flex fr mtl">
                <select
                    className="form__control wauto mb0 mrm"
                    onChange={(event) => setFilter(event.target.value)}
                >
                    <option>Alle</option>
                    <option>Aktive</option>
                    <option>Deaktivert</option>
                </select>
                <NavLink to="./../ny-aktivitet">
                    <Button>Legg til ny aktivitet</Button>
                </NavLink>
            </div>
            <Table data={filteredData} columns={columns} />
        </>
    )
}

export default Oversikt
