import './aktivitet-form.css'

import React, { ChangeEvent } from 'react'
import { Aktivitet } from '../../types/aktiviteter'
import DatePicker from '../common/forms/DatePicker'
import Input from '../common/forms/Input'
import PersonSelect from '../common/forms/PersonSelect'
import RadioButtons from '../common/forms/RadioButtons'
import Select from '../common/forms/Select'
import Textarea from '../common/forms/Textarea'
import { useAktivitetRepetisjoner } from '../../hooks/useAktivitetRepitisjoner'

interface IAktivitetFormProps {
    formValues: Aktivitet
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const AktivitetForm = ({
    formValues,
    handleInputChange,
}: IAktivitetFormProps) => {
    const { data: aktivitetRepetisjoner } = useAktivitetRepetisjoner()

    return (
        <form className="aktivitet-form">
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
                        options={['Aktiv', 'Deaktivert']}
                        value={formValues['status']}
                    />

                    <Select
                        name="repetisjon"
                        id="aktivitet-repetisjon"
                        label="Repetisjon"
                        onChange={handleInputChange}
                        options={
                            aktivitetRepetisjoner?.map(
                                ({ tittel }) => tittel
                            ) ?? []
                        }
                        value={formValues['repetisjon']}
                    />

                    <Select
                        name="leverandor"
                        id="aktivitet-leverandor"
                        label="Leverandør"
                        onChange={handleInputChange}
                        options={['HMS Leverandør', 'Bolig leverandør']}
                        value={formValues['leverandor']}
                    />
                    <PersonSelect
                        name="ansvarligOppfolging"
                        id="aktivitet-ansvarligOppfolging"
                        label="Ansvarlig oppfølging"
                        onChange={handleInputChange}
                        value={formValues['ansvarligOppfolging']}
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
        </form>
    )
}

export default AktivitetForm
