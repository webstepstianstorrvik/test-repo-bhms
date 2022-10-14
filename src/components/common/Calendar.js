import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'

import React from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/nb'

const localizer = momentLocalizer(moment)

const Calendar = ({ events }) => {
    const lang = {
        week: 'Uke',
        work_week: 'Arbeidsuke',
        day: 'Dag',
        month: 'Måned',
        previous: 'Forrige',
        next: 'Neste',
        today: 'I dag',
        agenda: 'Agenda',

        showMore: (total) => `+${total} mer`,
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
