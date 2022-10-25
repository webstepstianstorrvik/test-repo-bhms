import axios from 'axios'
import { useAuth } from 'react-oidc-context'
import { useQuery } from '@tanstack/react-query'
import { useUser } from './useUser'

export const SKJEMASAMLING_QUERY_KEY_PREFIX = 'skjemasamling'

export const useSkjemasamling = () => {
    const auth = useAuth()
    const user = useUser()

    const accessToken = auth.user?.access_token
    const brlId = user?.brlId

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    }

    return useQuery(
        [SKJEMASAMLING_QUERY_KEY_PREFIX, accessToken, brlId],
        () =>
            axios
                .get(
                    `https://api.bevarhms.no/api/boligselskaper/${brlId}/skjemasamling`,
                    config
                )
                .then((res) => res.data),
        { enabled: !!accessToken && !!brlId, refetchOnWindowFocus: false }
    )
}
