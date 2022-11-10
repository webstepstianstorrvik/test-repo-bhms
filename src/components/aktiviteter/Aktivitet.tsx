import React, { ChangeEvent, useState } from 'react'
import Button from '../common/Button'
import { Aktivitet as TAktivitet } from '../../types/aktiviteter'
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom'
import Modal from '../common/Modal'
import AktivitetForm from './AktivitetForm'

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

const Aktivitet = () => {
    const [formValues, setFormValues] = useState<TAktivitet>(initialForm)
    const [guideModalOpen, setGuideModalOpen] = useState(false)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        const name = target.name
        var value: string | string[] = target.value

        if (target.type === 'checkbox') {
            var currentValues = formValues[name as keyof TAktivitet]
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

    return (
        <>
            <div className="fr mtl">
                <NavLink to="/aktiviteter/oversikt">
                    <Button variant="secondary">Tilbake</Button>
                </NavLink>
                <Button
                    className="mlm"
                    variant="secondary"
                    onClick={() => setGuideModalOpen(true)}
                >
                    Veiledning
                </Button>
                <Button type="submit" className="mlm">
                    Lagre aktivitet
                </Button>
            </div>
            <div className="aktivitet">
                <div className="aktivitet__detaljer">
                    <AktivitetForm
                        formValues={formValues}
                        handleInputChange={handleInputChange}
                    />
                    {/* <AktivitetKoblinger formValues={formValues} handleInputChange={handleInputChange}/> */}
                </div>
                <div className="aktivitet__frister"></div>
            </div>

            <Modal
                title="Veiledning"
                show={guideModalOpen}
                onClose={() => setGuideModalOpen(false)}
            >
                <p className="mls">Veiledning informasjon</p>
            </Modal>
        </>
    )
}

export default Aktivitet
