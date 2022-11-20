import React from 'react'
import { useSingleNews } from '../../hooks/useSingleNews'
import { useParams } from 'react-router-dom'
import Spinner from '../common/Spinner'
import Card from '../common/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faUser, faPrint } from '@fortawesome/free-solid-svg-icons'

const NewsArticle = () => {
    const { id: imageId } = useParams()
    const { data, isLoading } = useSingleNews(imageId!!)

    if (isLoading) {
        return <Spinner />
    }

    const { author, content, ingress, imageUrl, published, title } = data!!
    return (
        <Card className="news-article">
            <img alt="news-cover" src={imageUrl} />
            <div className="news-article__content">
                <div className="news-article__info-bar">
                    <p>
                        <FontAwesomeIcon className="mrm" icon={faCalendar} />
                        {new Date(published).toLocaleDateString()}
                    </p>
                    <p>
                        <FontAwesomeIcon className="mrm" icon={faUser} />
                        {author}
                    </p>
                    <p>
                        <FontAwesomeIcon className="mrm" icon={faPrint} />
                        Skriv ut
                    </p>
                </div>
                <h1>{title}</h1>
                <p>{ingress}</p>
                <h2>Second header</h2>
                <p>{content}</p>
                <h2>Second header</h2>
                <p>{content}</p>
            </div>
        </Card>
    )
}

export default NewsArticle
