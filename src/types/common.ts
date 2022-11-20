export interface User {
    type: string
    kartotekId: number
    navn: string
    mobiltelefon: string
    epost: string
    brukerId: number
    brukernavn: string
    rolleId: number
    rolle: string
    styreleder: boolean
    styrelederTilgang: boolean
    brlId: number
    boligselskap: string
    bblId: number
    boligbyggelag: string
}

export interface Person {
    navn: string
    kartotekId: number
    gruppe: string
}

export interface NameValue {
    name: string
    value: string | number
}
