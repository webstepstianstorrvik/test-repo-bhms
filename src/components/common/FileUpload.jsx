import './file-upload.css'

import React, { useRef, useState } from 'react'
import { FileDrop } from 'react-file-drop'
import { faCloudArrowUp, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FileUpload = () => {
    const inputRef = useRef()
    const [selectFiles, setSelectFiles] = useState([])

    const handleFileUploadClick = () => {
        inputRef.current.click()
    }

    const handleAddFile = (files) => {
        setSelectFiles((selectFiles) => [...selectFiles, ...files])
    }

    const handleRemoveFile = (name) => {
        setSelectFiles((selectFiles) => [
            ...selectFiles.filter((file) => file.name !== name),
        ])
    }

    console.log(selectFiles)

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
                    multiple="multiple"
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
                                icon={faXmark}
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
