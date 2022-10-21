import { useEffect, useState } from "react";
import { useBoligselskaper } from "./useBoligselskaper";

export const useUser = () => {
    const { data: boligselskaper } = useBoligselskaper()
    const [user, setUser] = useState()

    useEffect(() => {
        if(boligselskaper) {
            setUser(boligselskaper[0])
        }
    }, [boligselskaper])

    return user
}