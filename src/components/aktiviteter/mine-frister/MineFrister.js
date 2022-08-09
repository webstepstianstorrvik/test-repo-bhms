import "./minefrister.css";

import React, { useState, useMemo } from "react";
import Calendar from "../../common/Calendar";

import CalendarButtonIcon from "../../../assets/img/icons/handbok/skjema.svg"
import ListButtonIcon from "../../../assets/img/icons/aktiviteter/oversikt.svg"
import PagesButtonIcon from "../../../assets/img/icons/arkiv/arkiv.svg"
import Table from "../../common/Table";


const MineFrister = () => {
    const [view, setView] = useState("CALENDAR")

    const events = useMemo(() => [], [])
    
    return (
        <>
            <div className="top-heading-button-wrapper">
                <div className="toggle-view-button-wrapper">
                    <button className="btn btn-secondary toggle-view-button" onClick={() => setView("CALENDAR")}><img src={CalendarButtonIcon} alt="calender-toggle-icon"/></button>
                    <button className="btn btn-secondary toggle-view-button" onClick={() => setView("LIST")}><img src={ListButtonIcon} alt="list-toggle-icon"/></button>
                    <button className="btn btn-secondary toggle-view-button" onClick={() => setView("PAGES")}><img src={PagesButtonIcon} alt="pages-toggle-icon"/></button>
                </div>
                <div className="info-button-wrapper">
                    <button className="btn btn-secondary info-button">Veiledning</button>
                    <button className="btn btn-secondary info-button">Skriv ut</button>
                </div>
            </div>
            
            <div>
                {view === "CALENDAR" && <Calendar events={events}/>}
                {view === "LIST" && <Table events={events}/>}
            </div>
        </>
    )
}

export default MineFrister;