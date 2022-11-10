import React, { useState, useRef, SyntheticEvent } from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IAccordionItemProps {
    title: string
    titleCount?: number
    children?: React.ReactNode
}

const AccordionItem = ({
    title,
    titleCount,
    children,
}: IAccordionItemProps) => {
    const contentElement = useRef(document.createElement('div'))
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsOpen((isOpen) => !isOpen)
    }

    return (
        <li className={`accordion_item ${isOpen ? 'active' : ''}`}>
            <button
                aria-controls={`accordion-${title}`}
                aria-expanded={isOpen}
                className="accordion_item__button form__control"
                onClick={(e) => handleToggle(e)}
            >
                <div>
                    {titleCount !== undefined ? (
                        <>
                            {title} (<b className="fw600">{titleCount}</b>)
                        </>
                    ) : (
                        title
                    )}
                </div>
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
                        ? {
                              maxHeight:
                                  contentElement.current.scrollHeight + 100,
                          }
                        : { maxHeight: '0px', visibility: 'hidden' }
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
