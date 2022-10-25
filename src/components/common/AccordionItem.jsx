import { useState, useRef } from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const AccordionItem = ({ title, children }) => {
    const contentElement = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(
        contentElement.current?.scrollHeight
    )

    const handleToggle = (e) => {
        e.preventDefault()
        setIsOpen((isOpen) => !isOpen)
    }

    useEffect(() => {
        setContentHeight(contentElement.current?.scrollHeight)
    }, [children])

    return (
        <li className={`accordion_item ${isOpen ? 'active' : ''}`}>
            <button
                aria-controls={`accordion-${title}`}
                aria-expanded={isOpen}
                className="accordion_item__button form__control"
                onClick={(e) => handleToggle(e)}
            >
                {title}
                <span className="accordion_item__control">
                    {isOpen ? 'Vis mindre' : 'Vis mer'}
                    <FontAwesomeIcon
                        icon={isOpen ? faChevronUp : faChevronDown}
                    />
                </span>
            </button>

            <div
                aria-hidden={!isOpen}
                className="accordion_item__content_wrapper"
                id={`accordion-${title}`}
                ref={contentElement}
                style={
                    isOpen
                        ? { height: contentHeight }
                        : { height: '0px', visibility: 'hidden' }
                }
            >
                <div
                    aria-hidden={!isOpen}
                    id={`accordion-${title}`}
                    className="accordion_item__content"
                >
                    {children}
                </div>
            </div>
        </li>
    )
}

export default AccordionItem
