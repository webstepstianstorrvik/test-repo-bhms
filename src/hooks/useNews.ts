import axios from 'axios'
import { useAuth } from 'react-oidc-context'
import { useQuery } from '@tanstack/react-query'
import { News } from '../types/news'

export const NEWS_QUERY_KEY_PREFIX = 'news'

export const useNews = () => {
    const auth = useAuth()

    const accessToken = auth.user?.access_token

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    }

    return useQuery<News[]>(
        [NEWS_QUERY_KEY_PREFIX, accessToken],
        () =>
            axios
                .get(`https://api.bevarhms.no/api/nyheter`, config)
                .then((res) => res.data),
        { enabled: !!accessToken, refetchOnWindowFocus: false }
    )
}
