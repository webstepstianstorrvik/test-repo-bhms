import './file-upload.css'

import React, { useRef, useState } from 'react'
import { FileDrop } from 'react-file-drop'
import { faCloudArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FileUpload = () => {
    const inputRef = useRef(document.createElement('input'))
    const [selectFiles, setSelectFiles] = useState<File[]>([])

    const handleFileUploadClick = () => {
        inputRef.current.click()
    }

    // TODO: Fix this method to destructure files correctly
    const handleAddFile = (files: FileList | null) => {
        if (!files) {
            return
        }
        setSelectFiles((selectFiles) => [...selectFiles, files.item(0)!!])
    }

    const handleRemoveFile = (name: string) => {
        setSelectFiles((selectFiles) => [
            ...selectFiles.filter((file) => file.name !== name),
        ])
    }

    return (
        <div className="file-upload">
            <FileDrop
                onTargetClick={handleFileUploadClick}
                onDrop={(f) => handleAddFile(f)}
            >
                <div className="file-upload__placeholder">
                    <FontAwesomeIcon
                        icon={faCloudArrowUp}
                        size="2x"
                        className="mbm"
                    />
                    DRA FILER HIT ELLER <span>LAST OPP</span>
                </div>
                <input
                    accept=".xls, .png, .psd, .doc, .docx, .ai, .pdf, .jpg, .jpeg"
                    value=""
                    style={{ visibility: 'hidden', opacity: 0 }}
                    ref={inputRef}
                    multiple={true}
                    type="file"
                    onChange={(e) => handleAddFile(e.target.files)}
                />
            </FileDrop>
            {selectFiles.length ? (
                <ul className="file-upload__uploaded">
                    {selectFiles.map(({ name }) => (
                        <li key={name}>
                            {name}{' '}
                            <FontAwesomeIcon
                                className="cpointer"
                                icon={faTrash}
                                onClick={() => handleRemoveFile(name)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="file-upload__non-uploaded">
                    Ingen filer er valgt
                </div>
            )}
        </div>
    )
}

export default FileUpload
