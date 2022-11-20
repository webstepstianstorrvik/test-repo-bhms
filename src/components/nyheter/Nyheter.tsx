import './news.css'

import React, { useState } from 'react'
import { useNews } from '../../hooks/useNews'
import Input from '../common/forms/Input'
import Select from '../common/forms/Select'
import NewsCard from './NewsCard'
import Spinner from '../common/Spinner'

const categories = [
    'Alle',
    'Aktiviteter',
    'Avvik/Tiltak',
    'Brannvern',
    'Risikovurdering',
]

enum SortDirection {
    NEWEST = 'Nyeste først',
    OLDEST = 'Eldste først',
}

const Nyheter = () => {
    const { data, isLoading } = useNews()
    const [searchInput, setSearchInput] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('Alle')
    const [selectedSortDirection, setSelectedSortDirection] = useState(
        SortDirection.NEWEST
    )

    var filteredNews = data
        ?.filter(
            ({ category }) =>
                category === selectedCategory || 'Alle' === selectedCategory
        )
        .filter(
            ({ category, title, published }) =>
                searchInput === '' ||
                category.toLowerCase().includes(searchInput.toLowerCase()) ||
                title.toLowerCase().includes(searchInput.toLowerCase()) ||
                published.toLowerCase().includes(searchInput.toLowerCase())
        )
        .sort((a, b) =>
            selectedSortDirection === SortDirection.NEWEST
                ? a.published < b.published
                    ? 1
                    : -1
                : a.published > b.published
                ? 1
                : -1
        )

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <div className="news-button-container">
                <Input
                    id="news-search"
                    name="news-search"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    placeholder="Søk etter artikkel"
                />
                <Select
                    id="news-sort-direction"
                    name="news-sort-direction"
                    onChange={(e) => setSelectedSortDirection(e.target.value)}
                    options={Object.values(SortDirection)}
                    value={selectedSortDirection}
                />
                <Select
                    id="news-category"
                    name="news-category"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    options={categories}
                    value={selectedCategory}
                />
            </div>
            <div className="news-grid">
                {filteredNews?.map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </div>
        </>
    )
}

export default Nyheter
