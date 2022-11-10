import axios from 'axios'
import { useAuth } from 'react-oidc-context'
import { useQuery } from '@tanstack/react-query'
import { AktivitetRepetisjon } from '../types/aktiviteter'

export const AKTIVITET_REPITISJONER_QUERY_KEY_PREFIX = 'aktivitet-repetisjoner'

export const useAktivitetRepetisjoner = () => {
    const auth = useAuth()

    const accessToken = auth.user?.access_token

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    }

    return useQuery<AktivitetRepetisjon[]>(
        [AKTIVITET_REPITISJONER_QUERY_KEY_PREFIX, accessToken],
        () =>
            axios
                .get(
                    `https://api.bevarhms.no/api/aktivitet-repetisjoner`,
                    config
                )
                .then((res) => res.data),
        { enabled: !!accessToken, refetchOnWindowFocus: false }
    )
}
