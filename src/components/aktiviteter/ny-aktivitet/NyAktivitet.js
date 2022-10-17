import './ny-aktivitet.css'

import React, { useState } from 'react'
import Input from '../../common/forms/Input'
import Textarea from '../../common/forms/Textarea'
import Select from '../../common/forms/Select'
import RadioButtons from '../../common/forms/RadioButtons'
import Button from '../../common/Button'
import Accordion from '../../common/Accordion'

const initialForm = {
    title: '',
    description: '',
    type: 'Avvik',
    status: 'Åpen',
    boligselskap: 'Mitt boligselskap',

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

    return (
        <div className="aktiviteter-form">
            <form>
                <div className="flex">
                    <div className="flex-2 mrl">
                        <Input
                            name="title"
                            id="aktivitet-title"
                            label="Tittel"
                            onChange={handleInputChange}
                            value={formValues['title']}
                        />
                        <Textarea
                            name="description"
                            id="aktivitet-description"
                            label="Beskrivelse"
                            onChange={handleInputChange}
                            value={formValues['description']}
                        />
                        <div className="flex">
                            <div className="flex-1 mrs">
                                <Select
                                    name="type"
                                    id="aktivitet-type"
                                    label="Type"
                                    onChange={handleInputChange}
                                    options={['Avvik', 'Forbedring']}
                                    value={formValues['type']}
                                />
                            </div>
                            <div className="flex-1 mls">
                                <Select
                                    name="boligselskap"
                                    id="aktivitet-boligselskap"
                                    label="Boligselskap"
                                    onChange={handleInputChange}
                                    options={[
                                        'Mitt boligselskap',
                                        'Noen andre sitt boligselskap',
                                    ]}
                                    value={formValues['boligselskap']}
                                />
                            </div>
                        </div>
                        <RadioButtons
                            name="status"
                            id="aktivitet-status"
                            label="Endre status"
                            onChange={handleInputChange}
                            options={['Åpen', 'Ferdig']}
                            value={formValues['status']}
                        />
                    </div>
                    <div className="flex-1 mll">
                        <h2 className="mbs">Koblinger:</h2>
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
                    </div>
                </div>
                <div className="flex justify-cfe mtxl">
                    <Button>Lagre</Button>
                </div>
            </form>
        </div>
    )
}

export default NyAktivitet
