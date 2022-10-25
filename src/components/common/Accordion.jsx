import './accordion.css'
import React from 'react'

const Accordion = ({ children }) => {
    return <ul className="accordion">{children}</ul>
}

export default Accordion
