import React, { ChangeEvent, useState } from 'react'
import Button from '../../common/Button'
import { format } from 'date-fns'
import TemplateModal from './TemplateModal'
import { faArrowRotateBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '../../common/Modal'
import { toast } from 'react-toastify'
import { Aktivitet, AktivitetTemplate } from '../../../types/aktiviteter'
import AktivitetForm from '../AktivitetForm'
import AktivitetKoblinger from '../AktivitetKoblinger'

const initialForm = {
    status: 'Aktiv',
    tittel: '',
    beskrivelse: '',
    fristDato: format(new Date(), 'yyyy-MM-dd'),
    repetisjon: 'Hver uke',
    varsling: 1,
    leverandor: 'HMS Leverandør',
    ansvarligUtforelse: 'Styreleder',
    ansvarligOppfolging: 'Styreleder',
    kopiTil: 'Styreleder',
    readonlyMaster: false,
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
    const [formValues, setFormValues] = useState<Aktivitet>(initialForm)
    const [templateModalOpen, setTemplateModalOpen] = useState(false)
    const [resetModalOpen, setResetModalOpen] = useState(false)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        const name = target.name
        var value: string | string[] = target.value

        if (target.type === 'checkbox') {
            var currentValues = formValues[name as keyof Aktivitet]
            if (Array.isArray(currentValues)) {
                value = target.checked
                    ? [...currentValues, target.value]
                    : currentValues.filter((e) => e !== target.value)
            }
        }

        setFormValues((values) => ({
            ...values,
            [name]: value,
        }))
    }

    const handleUseTemplate = (template: AktivitetTemplate) => {
        setTemplateModalOpen(false)
        setFormValues({
            ...initialForm,
            ...template,
            status: 'Aktiv',
        })
    }

    const handleResetForm = () => {
        setResetModalOpen(false)
        setFormValues(initialForm)
        toast('Alle verdier i skjemaet ditt har blitt nullstilt')
    }

    const handleSubmit = () => {
        console.log(formValues)
    }

    return (
        <>
            <div className="fr mtm">
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
            <div className="ny-aktivitet">
                <AktivitetForm
                    formValues={formValues}
                    handleInputChange={handleInputChange}
                />
                <AktivitetKoblinger
                    formValues={formValues}
                    handleInputChange={handleInputChange}
                />
            </div>
            <Modal
                title="Nullstill skjema"
                show={resetModalOpen}
                onSubmit={handleResetForm}
                onClose={() => setResetModalOpen(false)}
            >
                <p className="mls">
                    Er du sikkert på at du vil nullstille skjemaet? Dette vil
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
