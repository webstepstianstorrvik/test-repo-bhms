import { useEffect, useState } from 'react'
import { User } from '../types/common'
import { useBoligselskaper } from './useBoligselskaper'

export const useUser = () => {
    const { data: boligselskaper } = useBoligselskaper()
    const [user, setUser] = useState<User>()

    useEffect(() => {
        if (boligselskaper) {
            setUser(boligselskaper[0])
        }
    }, [boligselskaper])

    return user
}
