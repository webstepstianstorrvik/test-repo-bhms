import './legg-til-vedlegg.css'

import React, { ChangeEvent, useRef, useState } from 'react'
import { useSkjemasamlinger } from '../../../hooks/useSkjemasamlinger'
import Button from '../../common/Button'
import Checkboxes from '../../common/forms/Checkboxes'
import { faFileArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'

interface ILeggTilVedleggProps {
    handleInputChange: (event: any) => void
    values: string[]
}

const LeggTilVedlegg = ({ handleInputChange, values }: ILeggTilVedleggProps) => {
    const skjemasamling = useSkjemasamlinger()
    const inputRef = useRef(document.createElement("input"))
    const [files, setFiles] = useState<File[]>([])


    // TODO: Fix this method to destructure files correctly
    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files!!
        toast(`${files.length} vedlegg ble lagt til`)
        setFiles((currentFiles) => [...currentFiles, files.item(0)!!])
    }

    const handleRemoveFile = (name: string) => {
        toast(`'${name}' ble fjernet fra vedlegg`)
        setFiles((selectFiles) => [
            ...selectFiles.filter((file) => file.name !== name),
        ])
    }

    return (
        <div className="aktiviteter-vedlegg">
            <Checkboxes
                name="vedlegg"
                id="aktivitet-vedlegg"
                label="Velg skjemasamlinger:"
                onChange={handleInputChange}
                options={skjemasamling.data?.map(({ tittel }) => tittel) ?? []}
                values={values}
            />
            {files && (
                <ul className="aktiviteter-vedlegg__list">
                    {files.map(({ name }) => (
                        <li key={name}>
                            <span>
                                <FontAwesomeIcon icon={faFileArrowUp} />
                                {name}
                            </span>
                            <FontAwesomeIcon
                                className="cpointer"
                                icon={faTrash}
                                onClick={() => handleRemoveFile(name)}
                            />
                        </li>
                    ))}
                </ul>
            )}
            <div className="mtm">
                <Button
                    variant="primary"
                    onClick={() => inputRef.current.click()}
                    fullWidth
                >
                    Last opp egne vedlegg
                </Button>
                <input
                    type="file"
                    multiple
                    style={{ display: 'none' }}
                    ref={inputRef}
                    onChange={handleFileUpload}
                />
            </div>
        </div>
    )
}

export default LeggTilVedlegg
