import React, { ChangeEvent } from 'react'
import { useSjekkliste } from '../../hooks/useSjekkliste'
import { Aktivitet } from '../../types/aktiviteter'
import Accordion from '../common/Accordion'
import AccordionItem from '../common/AccordionItem'
import AddLinks from '../common/forms/AddLinks'
import Checkboxes from '../common/forms/Checkboxes'
import PersonCheckboxes from '../common/forms/PersonCheckboxes'
import LeggTilVedlegg from './ny-aktivitet/LeggTilVedlegg'

interface IAktivitetKoblingerProps {
    formValues: Aktivitet
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const AktivitetKoblinger = ({
    formValues,
    handleInputChange,
}: IAktivitetKoblingerProps) => {
    const sjekkliste = useSjekkliste()

    return (
        <div className="aktivitet-koblinger">
            <h2 className="form__label">Koblinger</h2>
            <Accordion>
                <AccordionItem
                    title="Legg til sjekklister"
                    titleCount={formValues['sjekkliste'].length}
                >
                    <Checkboxes
                        name="sjekkliste"
                        id="aktivitet-sjekkliste"
                        label="Velg sjekklister:"
                        onChange={handleInputChange}
                        options={
                            sjekkliste.data?.map(({ tittel }) => tittel) ?? []
                        }
                        values={formValues['sjekkliste']}
                    />
                </AccordionItem>
                <AccordionItem
                    title="Legg til vedlegg"
                    titleCount={formValues['vedlegg'].length}
                >
                    <LeggTilVedlegg
                        values={formValues['vedlegg']}
                        handleInputChange={handleInputChange}
                    />
                </AccordionItem>
                <AccordionItem
                    title="Legg til HMS-Håndbok"
                    titleCount={formValues['hmsHandbok'].length}
                ></AccordionItem>
                <AccordionItem
                    title="Legg til risikovurderinger"
                    titleCount={formValues['risikovurdering'].length}
                ></AccordionItem>
                <AccordionItem
                    title="Legg til kontakter"
                    titleCount={formValues['kontakter'].length}
                >
                    <PersonCheckboxes
                        name="kontakter"
                        id="aktivitet-kontakter"
                        onChange={handleInputChange}
                        values={formValues['kontakter']}
                    />
                </AccordionItem>
                <AccordionItem
                    title="Legg til arkiv"
                    titleCount={formValues['arkiv'].length}
                ></AccordionItem>
                <AccordionItem
                    title="Legg til eksterne lenker"
                    titleCount={formValues['eksterneLenker'].length}
                >
                    <AddLinks
                        name="eksterneLenker"
                        id="aktivitet-eksterneLenker"
                        label="Legg til ny lenke"
                        onChange={handleInputChange}
                        values={formValues['eksterneLenker']}
                    />
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AktivitetKoblinger
