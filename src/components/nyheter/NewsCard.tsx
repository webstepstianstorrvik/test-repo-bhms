import React from 'react'
import { News } from '../../types/news'
import Card from '../common/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'

interface INewsCardProps {
    className?: string
    news: News
}

const NewsCard = ({ className, news }: INewsCardProps) => {
    const { category, id, imageUrl, published, title } = news
    return (
        <NavLink to={`/nyheter/${id}`} className={`news-card ${className}`}>
            <Card>
                <img alt="news-cover" src={imageUrl} />
                <div className="news-card__content pvl phl">
                    <p className="category">{category}</p>
                    <h1 className="title">{title}</h1>
                    <p className="date">
                        <FontAwesomeIcon className="mrs" icon={faCalendar} />
                        {new Date(published).toLocaleDateString()}
                    </p>
                </div>
            </Card>
        </NavLink>
    )
}

export default NewsCard
