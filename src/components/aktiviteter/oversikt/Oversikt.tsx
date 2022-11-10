import React, { useState } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { Aktivitet } from '../../../types/aktiviteter'
import Table from '../../common/Table'
import { useAktiviteter } from '../../../hooks/useAktiviteter'
import Button from '../../common/Button'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import {
    faArrowUpRightFromSquare,
    faLock,
} from '@fortawesome/free-solid-svg-icons'
import StatusButton from '../../common/StatusButton'
import Spinner from '../../common/Spinner'
import Select from '../../common/forms/Select'
import ReactTooltip from 'react-tooltip'

const Oversikt = () => {
    const { data, isLoading } = useAktiviteter()
    const [filter, setFilter] = useState('Alle')

    const columnHelper = createColumnHelper<Aktivitet>()

    const columns = [
        columnHelper.accessor('tittel', {
            cell: (info) => info.getValue(),
            header: () => <span>Tittel</span>,
        }),
        columnHelper.accessor('aktivitetId', {
            cell: (info) => (
                <NavLink to={`/aktiviteter/oversikt/${info.getValue()}`}>
                    <Button variant="secondary" size="small">
                        1
                    </Button>
                </NavLink>
            ),
            header: () => <span>Frister</span>,
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
        columnHelper.accessor('fristDato', {
            cell: (info) => info.getValue(),
            header: () => <span>Sist utført</span>,
        }),
        columnHelper.accessor('ansvarligUtforelse', {
            cell: (info) => (
                <>
                    <span className="db">
                        {info.row.original.ansvarligUtforelse}
                    </span>
                    <span className="db">
                        {info.row.original.ansvarligOppfolging}
                    </span>
                </>
            ),
            header: () => <span>Ansvarlige</span>,
        }),
        columnHelper.accessor('repetisjon', {
            cell: (info) => info.getValue(),
            header: () => <div>Hyppighet</div>,
        }),
        columnHelper.accessor('readonlyMaster', {
            cell: (info) => (
                <NavLink
                    data-for="locked-tip"
                    data-tip-disable={!info.getValue()}
                    data-tip="Aktiviteten er låst av borettslaget"
                    to={`/aktiviteter/oversikt/${info.getValue()}`}
                >
                    <ReactTooltip id="locked-tip" />
                    <Button
                        variant="secondary"
                        size="small"
                        disabled={info.getValue()}
                    >
                        <FontAwesomeIcon
                            className="mrs"
                            icon={info.getValue() ? faLock : faPenToSquare}
                        />
                        {info.getValue() ? 'Låst' : 'Rediger'}
                    </Button>
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
                <Select
                    className="wauto mb0 mrm"
                    id="aktivitet-status-filter"
                    name="aktivitet-status-filter"
                    onChange={(event) => setFilter(event.target.value)}
                    options={['Alle', 'Aktive', 'Deaktiverte']}
                    value={filter}
                />
                <NavLink to="./../ny-aktivitet">
                    <Button>Legg til ny aktivitet</Button>
                </NavLink>
            </div>
            <Table data={filteredData} columns={columns} />
        </>
    )
}

export default Oversikt
