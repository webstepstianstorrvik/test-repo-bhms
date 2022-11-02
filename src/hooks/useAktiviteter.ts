import axios from 'axios'
import { useAuth } from 'react-oidc-context'
import { useQuery } from '@tanstack/react-query'
import { useUser } from './useUser'
import { AktiviteterResponse } from '../types/aktiviteter'

export const AKTIVITETER_QUERY_KEY_PREFIX = 'aktiviteter'

export const useAktiviteter = () => {
    const auth = useAuth()
    const user = useUser()

    const accessToken = auth.user?.access_token
    const brlId = user?.brlId

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    }

    return useQuery<AktiviteterResponse>(
        [AKTIVITETER_QUERY_KEY_PREFIX, accessToken, brlId],
        () =>
            axios
                .get(
                    `https://api.bevarhms.no/api/boligselskaper/${brlId}/aktiviteter`,
                    config
                )
                .then((res) => res.data),
        { enabled: !!accessToken && !!brlId, refetchOnWindowFocus: false }
    )
}
