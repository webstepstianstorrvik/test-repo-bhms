import './ny-aktivitet.css'

import React, { useState } from 'react'
import Input from '../../common/forms/Input'
import Textarea from '../../common/forms/Textarea'
import Select from '../../common/forms/Select'
import RadioButtons from '../../common/forms/RadioButtons'
import Button from '../../common/Button'
import Accordion from '../../common/Accordion'
import DatePicker from '../../common/forms/DatePicker'

const initialForm = {
    status: 'Åpen',
    tittel: '',
    beskrivelse: '',
    fristDato: '2022-10-18',
    repetisjon: 'Hver uke',
    varslingFørFrist: 1,
    leverandor: 'HMS Leverandør',
    ansvarligUtforelse: 'Kari Nordmann',
    kopiTil: 'Jens Stoltenberg',

    sjekkliste: '',
    vedlegg: '',
    hmsHandbok: '',
    risikovurdering: '',
    kontakter: '',
    arkiv: '',
    eksterneLenker: '',
}

const NyAktivitet = () => {
    const [formValues, setFormValues] = useState(initialForm)

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

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
                        <div className="flex">
                            <div className="flex-1 mrs">
                            <RadioButtons
                                    name="status"
                                    id="aktivitet-status"
                                    label="Endre status"
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
                                    options={[
                                        'Ola Nordmann',
                                        'Kari Nordmann',
                                        'Ole Brumm',
                                    ]}
                                    value={formValues['ansvarligOppfolging']}
                                />
                                
                            </div>
                            <div className="flex-1 mls">
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
                                    options={[
                                        'Ola Nordmann',
                                        'Kari Nordmann',
                                        'Ole Brumm',
                                    ]}
                                    value={formValues['ansvarligUtforelse']}
                                />
                                <Select
                                    name="kopiTil"
                                    id="aktivitet-kopiTil"
                                    label="Kopi til"
                                    onChange={handleInputChange}
                                    options={[
                                        'Ola Nordmann',
                                        'Kari Nordmann',
                                        'Ole Brumm',
                                    ]}
                                    value={formValues['kopiTil']}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="aktiviteter-form__handlinger">
                        <Accordion title="Legg til sjekkliste">
                            <Select
                                name="sjekkliste"
                                id="aktivitet-sjekkliste"
                                aria-label="Legg til sjekkliste:"
                                onChange={handleInputChange}
                                options={['Option 1', 'Option 2']}
                                value={formValues['sjekkliste']}
                            />
                        </Accordion>
                        <Accordion title="Legg til vedlegg">
                            <Select
                                name="vedlegg"
                                id="aktivitet-vedlegg"
                                aria-label="Legg til vedlegg:"
                                onChange={handleInputChange}
                                options={['Option 1', 'Option 2']}
                                value={formValues['vedlegg']}
                            />
                        </Accordion>
                        <Accordion title="Legg til HMS-Håndbok">
                            <Select
                                name="hmsHandbok"
                                id="aktivitet-hmsHandbok"
                                aria-label="Legg til HMS-Håndbok:"
                                onChange={handleInputChange}
                                options={['Option 1', 'Option 2']}
                                value={formValues['hmsHandbok']}
                            />
                        </Accordion>
                        <Accordion title="Legg til risikovurderinger">
                            <Select
                                name="risikovurdering"
                                id="aktivitet-risikovurdering"
                                aria-label="Legg til risikovurderinger:"
                                onChange={handleInputChange}
                                options={['Option 1', 'Option 2']}
                                value={formValues['risikovurdering']}
                            />
                        </Accordion>
                        <Accordion title="Legg til kontakter">
                            <Select
                                name="kontakter"
                                id="aktivitet-kontakter"
                                aria-label="Legg til kontakter:"
                                onChange={handleInputChange}
                                options={['Option 1', 'Option 2']}
                                value={formValues['kontakter']}
                            />
                        </Accordion>
                        <Accordion title="Legg til arkiv">
                            <Select
                                name="arkiv"
                                id="aktivitet-arkiv"
                                aria-label="Legg til arkiv:"
                                onChange={handleInputChange}
                                options={['Option 1', 'Option 2']}
                                value={formValues['arkiv']}
                            />
                        </Accordion>
                        <Accordion title="Legg til eksterne lenker">
                            <Select
                                name="eksterneLenker"
                                id="aktivitet-eksterneLenker"
                                aria-label="Legg til eksterne lenker:"
                                onChange={handleInputChange}
                                options={['Option 1', 'Option 2']}
                                value={formValues['eksterneLenker']}
                            />
                        </Accordion>
                        <div className="flex justify-cfe mtl">
                    <Button type="submit" fullWidth>Lagre ny aktivitet</Button>
                </div>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default NyAktivitet
