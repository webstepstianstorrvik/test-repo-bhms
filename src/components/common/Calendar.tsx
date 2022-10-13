import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'

import React from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/nb'

const localizer = momentLocalizer(moment)

export interface Event {
    title: string
    start: string
    end: string
    allDay?: boolean
    resource?: any
    customFeild: string
    id: number
}

interface ICalendarProps {
    events: Event[]
}

const Calendar = ({ events }: ICalendarProps) => {
    const lang = {
        week: 'Uke',
        work_week: 'Arbeidsuke',
        day: 'Dag',
        month: 'Måned',
        previous: 'Forrige',
        next: 'Neste',
        today: 'I dag',
        agenda: 'Agenda',

        showMore: (total: number) => `+${total} mer`,
    }

    return (
        <div className="calendar">
            <BigCalendar
                culture="fr"
                localizer={localizer}
                events={events}
                //views={false}
                messages={lang}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
            />
        </div>
    )
}

export default Calendar
