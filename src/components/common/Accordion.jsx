import './accordion.css'
import React, { useState } from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Accordion = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <details>
            <summary
                className="noselect"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                {title}
                <span>
                    <FontAwesomeIcon
                        icon={isOpen ? faChevronUp : faChevronDown}
                    />
                </span>
            </summary>
            {children}
        </details>
    )
}

export default Accordion
