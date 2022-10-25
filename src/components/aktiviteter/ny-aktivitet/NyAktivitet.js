import './ny-aktivitet.css'

import React, { useState } from 'react'
import Input from '../../common/forms/Input'
import Textarea from '../../common/forms/Textarea'
import Select from '../../common/forms/Select'
import RadioButtons from '../../common/forms/RadioButtons'
import Button from '../../common/Button'
import Accordion from '../../common/Accordion'
import DatePicker from '../../common/forms/DatePicker'
import Checkboxes from '../../common/forms/Checkboxes'
import { useSjekkliste } from '../../../hooks/useSjekkliste'
import { useSkjemasamling } from '../../../hooks/useSkjemasamling'
import { useAnsvarligePersoner } from '../../../hooks/useAnsvarligePersoner'
import { format } from 'date-fns'
import AccordionItem from '../../common/AccordionItem'
import AddLinks from '../../common/forms/AddLinks'
import Modal from '../../common/Modal'
import FileUpload from '../../common/FileUpload'

const initialForm = {
    status: 'Åpen',
    tittel: '',
    beskrivelse: '',
    fristDato: format(new Date(), 'yyyy-MM-dd'),
    repetisjon: 'Hver uke',
    varsling: 1,
    leverandor: 'HMS Leverandør',
    ansvarligUtforelse: 'Styreleder',
    ansvarligOppfolging: 'Styreleder',
    kopiTil: 'Styreleder',
    sjekkliste: [],
    vedlegg: [],
    hmsHandbok: [],
    risikovurdering: [],
    kontakter: [],
    arkiv: [],
    eksterneLenker: [],
}

const NyAktivitet = () => {
    const ansvarligePersoner = useAnsvarligePersoner()
    const sjekkliste = useSjekkliste()
    const skjemasamling = useSkjemasamling()
    const [formValues, setFormValues] = useState(initialForm)
    const [showFileModal, setShowFileModal] = useState(false)

    const handleInputChange = (event) => {
        const target = event.target
        const name = target.name
        var value = target.value

        if (target.type === 'checkbox') {
            // TODO: Remove typeof when refactoring to TS
            console.log('checked', name)
            value =
                target.checked && typeof formValues[name] == 'object'
                    ? [...formValues[name], target.value]
                    : formValues[name].filter((e) => e !== target.value)
        }

        console.log(name, value)

        setFormValues((values) => ({
            ...values,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formValues)
    }

    return (
        <>
            <div className="fr mtl">
                <Button
                    type="submit"
                    variant="secondary"
                    onClick={() => setFormValues(initialForm)}
                >
                    Nullstill skjema
                </Button>
                <Button type="submit" className="mlm">
                    Lagre ny aktivitet
                </Button>
            </div>
            <div className="aktiviteter-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <div className="aktiviteter-form__generelt">
                            <Input
                                name="tittel"
                                id="aktivitet-tittel"
                                label="Tittel"
                                onChange={handleInputChange}
                                value={formValues['tittel']}
                            />
                            <Textarea
                                name="beskrivelse"
                                id="aktivitet-beskrivelse"
                                label="Beskrivelse"
                                onChange={handleInputChange}
                                value={formValues['beskrivelse']}
                            />
                            <div className="column-2">
                                <div className="flex-1 column-left">
                                    <RadioButtons
                                        name="status"
                                        id="aktivitet-status"
                                        label="Status"
                                        onChange={handleInputChange}
                                        options={['Åpen', 'Ferdig']}
                                        value={formValues['status']}
                                    />

                                    <Select
                                        name="repetisjon"
                                        id="aktivitet-repetisjon"
                                        label="Repetisjon"
                                        onChange={handleInputChange}
                                        options={[
                                            'Hver dag',
                                            'Hver uke',
                                            'Hver måned',
                                            'Hvert år',
                                        ]}
                                        value={formValues['repetisjon']}
                                    />

                                    <Select
                                        name="leverandor"
                                        id="aktivitet-leverandor"
                                        label="Leverandør"
                                        onChange={handleInputChange}
                                        options={[
                                            'HMS Leverandør',
                                            'Bolig leverandør',
                                        ]}
                                        value={formValues['leverandor']}
                                    />
                                    <Select
                                        name="ansvarligOppfolging"
                                        id="aktivitet-ansvarligOppfolging"
                                        label="Ansvarlig oppfølging"
                                        onChange={handleInputChange}
                                        options={
                                            ansvarligePersoner.data?.map(
                                                ({ navn }) => navn
                                            ) ?? []
                                        }
                                        value={
                                            formValues['ansvarligOppfolging']
                                        }
                                    />
                                </div>
                                <div className="flex-1 column-right">
                                    <DatePicker
                                        name="fristDato"
                                        id="aktivitet-fristDato"
                                        label="Frist"
                                        onChange={handleInputChange}
                                        value={formValues['fristDato']}
                                    />
                                    <Input
                                        name="varsling"
                                        id="aktivitet-varsling"
                                        label="Varsling før frist (dager)"
                                        type="number"
                                        onChange={handleInputChange}
                                        value={formValues['varsling']}
                                    />

                                    <Select
                                        name="ansvarligUtforelse"
                                        id="aktivitet-ansvarligUtforelse"
                                        label="Ansvarlig utførelse"
                                        onChange={handleInputChange}
                                        options={
                                            ansvarligePersoner.data?.map(
                                                ({ navn }) => navn
                                            ) ?? []
                                        }
                                        value={formValues['ansvarligUtforelse']}
                                    />
                                    <Select
                                        name="kopiTil"
                                        id="aktivitet-kopiTil"
                                        label="Kopi til"
                                        onChange={handleInputChange}
                                        options={
                                            ansvarligePersoner.data?.map(
                                                ({ navn }) => navn
                                            ) ?? []
                                        }
                                        value={formValues['kopiTil']}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="aktiviteter-form__handlinger">
                            <h2 className="form__label">Koblinger</h2>
                            <Accordion>
                                <AccordionItem title="Legg til sjekklister">
                                    <Checkboxes
                                        name="sjekkliste"
                                        id="aktivitet-sjekkliste"
                                        label="Eksisterende sjekklister"
                                        onChange={handleInputChange}
                                        options={
                                            sjekkliste.data?.map(
                                                ({ tittel }) => tittel
                                            ) ?? []
                                        }
                                        values={formValues['sjekkliste']}
                                    />
                                </AccordionItem>
                                <AccordionItem title="Legg til vedlegg">
                                    <Checkboxes
                                        name="vedlegg"
                                        id="aktivitet-vedlegg"
                                        label="Skjemasamlinger"
                                        onChange={handleInputChange}
                                        options={
                                            skjemasamling.data?.map(
                                                ({ tittel }) => tittel
                                            ) ?? []
                                        }
                                        values={formValues['vedlegg']}
                                    />
                                    <div className="mtm">
                                        <Button
                                            onClick={() =>
                                                setShowFileModal(true)
                                            }
                                            variant="secondary"
                                            fullWidth
                                        >
                                            Last opp egne vedlegg
                                        </Button>
                                    </div>
                                    <Modal
                                        title="Last opp filer"
                                        show={showFileModal}
                                        onClose={() => setShowFileModal(false)}
                                    >
                                        <FileUpload />
                                    </Modal>
                                </AccordionItem>
                                <AccordionItem title="Legg til HMS-Håndbok"></AccordionItem>
                                <AccordionItem title="Legg til risikovurderinger"></AccordionItem>
                                <AccordionItem title="Legg til kontakter"></AccordionItem>
                                <AccordionItem title="Legg til arkiv"></AccordionItem>
                                <AccordionItem title="Legg til eksterne lenker">
                                    <AddLinks
                                        name="eksterneLenker"
                                        id="aktivitet-eksterneLenker"
                                        label="Legg til ny lenke"
                                        onChange={handleInputChange}
                                        options={['Option 1', 'Option 2']}
                                        values={formValues['eksterneLenker']}
                                    />
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NyAktivitet
