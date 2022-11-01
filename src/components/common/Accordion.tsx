import './accordion.css'
import React, { ReactNode } from 'react'

interface IAccordionProps {
    children: ReactNode
}

const Accordion = ({ children }: IAccordionProps) => {
    return <ul className="accordion">{children}</ul>
}

export default Accordion
