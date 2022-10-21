import axios from 'axios'
import { useAuth } from 'react-oidc-context'
import { useQuery } from '@tanstack/react-query'

export const MINE_BOLIGSELSKAPER_QUERY_KEY_PREFIX = 'mine-boligselskaper'

export const useBoligselskaper = () => {
    const auth = useAuth()
    const accessToken = auth.user?.access_token

    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
  };

    return useQuery(
        [MINE_BOLIGSELSKAPER_QUERY_KEY_PREFIX, accessToken],
        () =>
            axios
                .get('https://api.bevarhms.no/api/boligselskaper/mine', config)
                .then((res) => res.data),
        { enabled: !!accessToken, refetchOnWindowFocus: false }
    )
}
