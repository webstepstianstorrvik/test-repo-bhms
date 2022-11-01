import React, { useEffect, useState } from 'react'
import Modal from '../../common/Modal'
import { useAktivitsMaler } from '../../../hooks/useAktivitetsmaler'
import { toast } from 'react-toastify'

const TemplateModal = ({ onTemplateSelect, onClose, show }) => {
    const { data, isLoading } = useAktivitsMaler()
    const [selectedTemplate, setSelectedTemplate] = useState()

    const templates = data?.sort((a, b) => (a.tittel > b.tittel ? 1 : -1))
    useEffect(() => {
        if (templates?.length) {
            setSelectedTemplate(templates[0])
        }
    }, [templates])

    if (isLoading) {
        return null
    }

    const handleConfirmClick = () => {
        onTemplateSelect(selectedTemplate)
        onClose()
        toast(`Aktivitetsmalen '${selectedTemplate.tittel}' ble importert fra mal`)
    }

    return (
        <Modal
            title="Velg aktivitetsmal"
            onClose={onClose}
            show={show}
            onSubmit={handleConfirmClick}
        >
            <p className="pls maxw40r">
                Velg den aktivitetsmalen du ønsker å bruke. Ved å importere en
                aktivitetsmal vil alle eksisterende verdier i skjemaet
                overskrives.
            </p>
            <div className="phl mvl overflow-ys">
                {templates.map((aktivitet) => (
                    <div
                        className="phl pvs bb"
                        key={aktivitet.aktivitetVeiviserId}
                    >
                        <input
                            className="scale13"
                            id={`aktivitetsmal-${aktivitet.aktivitetVeiviserId}`}
                            name={aktivitet.tittel}
                            type="radio"
                            value={aktivitet}
                            onChange={() => setSelectedTemplate(aktivitet)}
                            checked={
                                selectedTemplate?.aktivitetVeiviserId ===
                                aktivitet.aktivitetVeiviserId
                            }
                        />
                        <label
                            className="form__radio-label mlm"
                            htmlFor={`aktivitetsmal-${aktivitet.aktivitetVeiviserId}`}
                        >
                            {aktivitet.tittel}
                        </label>
                    </div>
                ))}
            </div>
        </Modal>
    )
}

export default TemplateModal
