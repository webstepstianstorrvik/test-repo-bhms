import axios from 'axios'
import { useAuth } from 'react-oidc-context'
import { useQuery } from '@tanstack/react-query'

export const AKTIVITETSMALER_QUERY_KEY_PREFIX = 'aktivitetsmaler'

export const useAktivitsMaler = () => {
    const auth = useAuth()
    const accessToken = auth.user?.access_token

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    }

    return useQuery(
        [AKTIVITETSMALER_QUERY_KEY_PREFIX, accessToken],
        () =>
            axios
                .get('https://api.bevarhms.no/api/aktivitet-veiviser', config)
                .then((res) => res.data),
        { enabled: !!accessToken, refetchOnWindowFocus: false }
    )
}
