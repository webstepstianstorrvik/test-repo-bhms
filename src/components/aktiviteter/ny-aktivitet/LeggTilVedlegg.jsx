import './legg-til-vedlegg.css'

import React, { useRef, useState } from 'react'
import { useSkjemasamling } from '../../../hooks/useSkjemasamling'
import Button from '../../common/Button'
import Checkboxes from '../../common/forms/Checkboxes'
import { faFileArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'

const LeggTilVedlegg = ({ handleInputChange, values }) => {
    const skjemasamling = useSkjemasamling()
    const inputRef = useRef()
    const [files, setFiles] = useState([])

    const handleFileUpload = (e) => {
        const files = e.target.files
        toast(`${files.length} vedlegg ble lagt til`)
        setFiles((currentFiles) => [...currentFiles, ...files])
    }

    const handleRemoveFile = (name) => {
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
