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
import { format } from 'date-fns'
import AccordionItem from '../../common/AccordionItem'
import AddLinks from '../../common/forms/AddLinks'
import LeggTilVedlegg from './LeggTilVedlegg'
import PersonSelect from '../../common/forms/PersonSelect'
import PersonCheckboxes from '../../common/forms/PersonCheckboxes'
import TemplateModal from './TemplateModal'
import { faArrowRotateBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '../../common/Modal'
import { toast } from 'react-toastify'

const initialForm = {
    status: 'Aktiv',
    tittel: '',
    aktivitet: '',
    fristDato: format(new Date(), 'yyyy-MM-dd'),
    repetisjon: 'Hver uke',
    varsling: 1,
    leverandor: 'HMS Leverandør',
    ansvarligUtforelse: 'Styreleder',
    ansvarligOppfolging: 'Styreleder',
    kopiTil: 'Styreleder',
    sjekkliste: [],
    vedlegg: [],
    vedleggUploaded: [],
    hmsHandbok: [],
    risikovurdering: [],
    kontakter: [],
    arkiv: [],
    eksterneLenker: [],
}

const NyAktivitet = () => {
    const sjekkliste = useSjekkliste()
    const [formValues, setFormValues] = useState(initialForm)
    const [templateModalOpen, setTemplateModalOpen] = useState(false)
    const [resetModalOpen, setResetModalOpen] = useState(false)

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

        setFormValues((values) => ({
            ...values,
            [name]: value,
        }))
    }

    const handleUseTemplate = (template) => {
        setTemplateModalOpen(false)
        setFormValues({ ...template, status: 'Aktiv' })
    }

    const handleResetForm = () => {
        setResetModalOpen(false)
        setFormValues(initialForm)
        toast('Alle verdier i skjemaet ditt har blitt nullstilt')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formValues)
    }

    return (
        <>
            <div className="fr mtl">
                <Button
                    variant="secondary"
                    onClick={() => setResetModalOpen(true)}
                >
                    <FontAwesomeIcon icon={faArrowRotateBackward} />
                </Button>
                <Button
                    className="mlm"
                    variant="secondary"
                    onClick={() => setTemplateModalOpen(true)}
                >
                    Importer fra mal
                </Button>
                <Button type="submit" className="mlm" onClick={handleSubmit}>
                    Lagre ny aktivitet
                </Button>
            </div>
            <div className="aktiviteter-form">
                <form>
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
                                name="aktivitet"
                                id="aktivitet-beskrivelse"
                                label="Beskrivelse"
                                onChange={handleInputChange}
                                value={formValues['aktivitet']}
                            />
                            <div className="column-2">
                                <div className="flex-1 column-left">
                                    <RadioButtons
                                        name="status"
                                        id="aktivitet-status"
                                        label="Status"
                                        onChange={handleInputChange}
                                        options={['Aktiv', 'Deaktivert']}
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
                                    <PersonSelect
                                        name="ansvarligOppfolging"
                                        id="aktivitet-ansvarligOppfolging"
                                        label="Ansvarlig oppfølging"
                                        onChange={handleInputChange}
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

                                    <PersonSelect
                                        name="ansvarligUtforelse"
                                        id="aktivitet-ansvarligUtforelse"
                                        label="Ansvarlig utførelse"
                                        onChange={handleInputChange}
                                        value={formValues['ansvarligUtforelse']}
                                    />
                                    <PersonSelect
                                        name="kopiTil"
                                        id="aktivitet-kopiTil"
                                        label="Kopi til"
                                        onChange={handleInputChange}
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
                                        label="Velg sjekklister:"
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
                                    <LeggTilVedlegg
                                        values={formValues['vedlegg']}
                                        handleInputChange={handleInputChange}
                                    />
                                </AccordionItem>
                                <AccordionItem title="Legg til HMS-Håndbok"></AccordionItem>
                                <AccordionItem title="Legg til risikovurderinger"></AccordionItem>
                                <AccordionItem title="Legg til kontakter">
                                    <PersonCheckboxes
                                        name="kontakter"
                                        id="aktivitet-kontakter"
                                        onChange={handleInputChange}
                                        values={formValues['kontakter']}
                                    />
                                </AccordionItem>
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
            <Modal
                title="Nullstill skjema"
                show={resetModalOpen}
                onSubmit={handleResetForm}
                onClose={() => setResetModalOpen(false)}
            >
                <p className="mls">
                    Er du sikkert på at du vil nulstille skjemaet? Dette vil
                    slette alle tidligere verdier.
                </p>
            </Modal>
            <TemplateModal
                show={templateModalOpen}
                onTemplateSelect={handleUseTemplate}
                onClose={() => setTemplateModalOpen(false)}
            />
        </>
    )
}

export default NyAktivitet
