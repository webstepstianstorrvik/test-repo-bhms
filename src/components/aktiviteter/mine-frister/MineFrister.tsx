import './minefrister.css'

import React, { useMemo } from 'react'
import Calendar from '../../common/Calendar'

import CalendarButtonIcon from '../../../assets/img/icons/handbok/skjema.svg'
import ListButtonIcon from '../../../assets/img/icons/aktiviteter/oversikt.svg'
import PagesButtonIcon from '../../../assets/img/icons/arkiv/arkiv.svg'
import MineFristerListView from './MineFristerListView'
import { useSearchParams } from 'react-router-dom'

export enum VIEW {
    CALENDAR = 'calendar',
    LIST = 'list',
    SINGLE = 'single',
}

export interface Frist {
    aktivitetId: number
    tittel: string
    hyppighet: string
    nesteFrist: string
    sistUtført: string
    ansvarlige: string[]
    isActive: boolean
}

const MineFrister = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const view = searchParams.get('view')

    const events: Frist[] = useMemo(
        () => [
            {
                aktivitetId: 0,
                tittel: 'Årlig kontroll av brannalarmanlegg',
                hyppighet: 'Årlig',
                nesteFrist: '19.08.2022',
                sistUtført: '08.08.2021',
                ansvarlige: ['Gerry Newton', 'Sivert Sletten'],
                isActive: true,
            },
            {
                aktivitetId: 1,
                tittel: 'Kontroll av sprinkelanlegg',
                hyppighet: 'Ukentlig',
                nesteFrist: '08.08.2022',
                sistUtført: '08.08.2022',
                ansvarlige: ['Gerry Newton', 'Sivert Sletten'],
                isActive: false,
            },
            {
                aktivitetId: 2,
                tittel: 'Kontroll av garasjeport',
                hyppighet: 'Månedlig',
                nesteFrist: '10.08.2022',
                sistUtført: '11.08.2022',
                ansvarlige: ['Gerry Newton', 'Sivert Sletten'],
                isActive: true,
            },
            {
                aktivitetId: 3,
                tittel: 'Årlig kontroll av røykventilasjon',
                hyppighet: 'Årlig',
                nesteFrist: '13.08.2021',
                sistUtført: '03.08.2022',
                ansvarlige: ['Gerry Newton', 'Sivert Sletten'],
                isActive: false,
            },
        ],
        []
    )

    return (
        <>
            <div className="top-heading-button-wrapper">
                <div className="toggle-view-button-wrapper">
                    <button
                        className="btn btn-secondary toggle-view-button"
                        onClick={() => setSearchParams({ view: VIEW.CALENDAR })}
                    >
                        <img
                            src={CalendarButtonIcon}
                            alt="calender-toggle-icon"
                        />
                    </button>
                    <button
                        className="btn btn-secondary toggle-view-button"
                        onClick={() => setSearchParams({ view: VIEW.LIST })}
                    >
                        <img src={ListButtonIcon} alt="list-toggle-icon" />
                    </button>
                    <button
                        className="btn btn-secondary toggle-view-button"
                        onClick={() => setSearchParams({ view: VIEW.SINGLE })}
                    >
                        <img src={PagesButtonIcon} alt="pages-toggle-icon" />
                    </button>
                </div>
                <div className="info-button-wrapper">
                    <button className="btn btn-secondary info-button">
                        Veiledning
                    </button>
                    <button className="btn btn-secondary info-button">
                        Skriv ut
                    </button>
                </div>
            </div>

            <div className="mine-frister-main">
                {view === VIEW.CALENDAR && <Calendar events={[]} />}
                {view === VIEW.LIST && <MineFristerListView events={events} />}
            </div>
        </>
    )
}

export default MineFrister
