export interface Aktivitet {
    status: string
    tittel: string
    beskrivelse: string
    fristDato: string
    repetisjon: string
    varsling: number
    leverandor: string,
    ansvarligUtforelse: string
    ansvarligOppfolging: string
    kopiTil: string
    sjekkliste: string[]
    vedlegg: string[]
    vedleggUploaded: string[]
    hmsHandbok: string[]
    risikovurdering: string[]
    kontakter: string[]
    arkiv: string[]
    eksterneLenker: string[]
}

export interface AktivitetTemplate {
    aktivitetVeiviserId: number
    frist: string
    tittel: string
    aktivitet: string
    aktivitetRepetisjonId: number
    varsling: number
    start: string
    ansvarlig: string
    repetisjon: string
    kravId: string,
    lovkrav: string,
    sjekklisteMaler: string[],
    vedlegg: string[],
    skjemaSamlinger: string[],
}