import axios from 'axios'
import { useAuth } from 'react-oidc-context'
import { useQuery } from '@tanstack/react-query'
import { useUser } from './useUser'

export const SJEKKLISTE_QUERY_KEY_PREFIX = 'sjekkliste'

export const useSjekkliste = () => {
    const auth = useAuth()
    const user = useUser()

    const accessToken = auth.user?.access_token
    const brlId = user?.brlId

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    }

    return useQuery(
        [SJEKKLISTE_QUERY_KEY_PREFIX, accessToken, brlId],
        () =>
            axios
                .get(
                    `https://api.bevarhms.no/api/boligselskaper/${brlId}/sjekklistemal`,
                    config
                )
                .then((res) => res.data),
        { enabled: !!accessToken && !!brlId, refetchOnWindowFocus: false }
    )
}
