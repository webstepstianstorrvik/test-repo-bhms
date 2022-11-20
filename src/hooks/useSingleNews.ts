import axios from 'axios'
import { useAuth } from 'react-oidc-context'
import { useQuery } from '@tanstack/react-query'
import { News } from '../types/news'

export const SINGLE_NEWS_QUERY_KEY_PREFIX = 'single-news'

export const useSingleNews = (id: string) => {
    const auth = useAuth()

    const accessToken = auth.user?.access_token

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    }

    return useQuery<News>(
        [SINGLE_NEWS_QUERY_KEY_PREFIX, accessToken, id],
        () =>
            axios
                .get(`https://api.bevarhms.no/api/nyheter/${id}`, config)
                .then((res) => res.data),
        { enabled: !!accessToken && !!id, refetchOnWindowFocus: false }
    )
}
