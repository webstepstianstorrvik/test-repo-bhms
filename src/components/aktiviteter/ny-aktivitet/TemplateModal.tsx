import React, { useEffect, useState } from 'react'
import Modal from '../../common/Modal'
import { useAktivitsMaler } from '../../../hooks/useAktivitetsmaler'
import { toast } from 'react-toastify'
import { AktivitetTemplate } from '../../../types/aktiviteter'

interface ITemplateModalProps {
    onTemplateSelect: (event: any) => void
    onClose: () => void
    show: boolean
}

const TemplateModal = ({ onTemplateSelect, onClose, show }: ITemplateModalProps) => {
    const { data, isLoading } = useAktivitsMaler()
    const [selectedTemplate, setSelectedTemplate] = useState<AktivitetTemplate>()

    const templates = data?.sort((a: AktivitetTemplate, b: AktivitetTemplate) => (a.tittel > b.tittel ? 1 : -1))
    useEffect(() => {
        if (templates?.length) {
            setSelectedTemplate(templates[0])
        }
    }, [templates])

    if (isLoading || !selectedTemplate) {
        return null
    }

    const handleConfirmClick = () => {
        onTemplateSelect(selectedTemplate)
        onClose()
        toast(
            `Aktivitetsmalen '${selectedTemplate.tittel}' ble importert fra mal`
        )
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
                {templates.map((template: AktivitetTemplate) => (
                    <div
                        className="phl pvs bb"
                        key={template.aktivitetVeiviserId}
                    >
                        <input
                            className="scale13"
                            id={`aktivitetsmal-${template.aktivitetVeiviserId}`}
                            name={template.tittel}
                            type="radio"
                            value={template.tittel}
                            onChange={() => setSelectedTemplate(template)}
                            checked={
                                selectedTemplate?.aktivitetVeiviserId ===
                                template.aktivitetVeiviserId
                            }
                        />
                        <label
                            className="form__radio-label mlm"
                            htmlFor={`aktivitetsmal-${template.aktivitetVeiviserId}`}
                        >
                            {template.tittel}
                        </label>
                    </div>
                ))}
            </div>
        </Modal>
    )
}

export default TemplateModal
