import './news-slider.css'

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../common/Button'
import { useNews } from '../../hooks/useNews'
import Spinner from '../common/Spinner'

const SLIDER_SIZE = 5

const Nyheter = () => {
    const { data, isLoading } = useNews()
    const [index, setIndex] = useState(0)

    if (!data || isLoading) {
        return <Spinner />
    }

    const { id, ingress, imageUrl, title } = data[index]
    return (
        <div className="news-slider">
            <div className="top">
                <p>Nyheter</p>
                <div>
                    <Button variant='icon' onClick={() => setIndex(prev => prev - 1)} disabled={index === 0}><FontAwesomeIcon icon={faChevronLeft} /></Button>
                    <Button variant='icon' onClick={() => setIndex(prev => prev + 1)} disabled={index === SLIDER_SIZE - 1}><FontAwesomeIcon icon={faChevronRight} /></Button>
                </div>
            </div>
            <div className="main">
                <img alt="news-cover" src={imageUrl} />
                <div className="news-slider__content">
                    <p className="title">{title}</p>
                    {ingress}
                </div>
            </div>
            <div className="bottom">
                <NavLink to={`/nyheter/${id}`}>Les artikkel</NavLink>
            </div>
        </div>
    )
}

export default Nyheter
