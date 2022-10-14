import '../../assets/css/fonts.css'
import './videothumb.css'
import React, { useState } from 'react'
import ReactModal from 'react-modal'
import VideoPlayer from './VideoPlayer'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import cross from './../../assets/img/icons/cross-black.svg'

const VideoThumb = ({
    videoTitle,
    urlFriendlyName,
    videoHeaderImageUrl,
    videoDurationText,
    videoUrl,
    modalTitle,
    modalContent,
    show,
}) => {
    const [showModal, setShowModal] = useState(show)
    const [showHelperModal, setShowHelperModal] = useState(false)
    const [, setSearchParams] = useSearchParams()

    const handleCloseModal = () => {
        setShowModal(false)
        setSearchParams()
    }

    const handleOpenModal = () => {
        setShowModal(true)
        setSearchParams({ video: urlFriendlyName })
    }

    const handleCloseHelperModal = () => {
        setShowHelperModal(false)
    }

    const handleOpenHelperModal = () => {
        setShowHelperModal(true)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(
            window.location + '?video=' + urlFriendlyName
        )
        toast('Kopiert lenke til ' + videoTitle)
    }

    return (
        <div className="video-thumb-parent">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                closeOnClick={true}
                pauseOnFocusLoss={false}
                draggable={false}
            />
            <div className="card video-thumb" onClick={handleOpenModal}>
                <div className="header-image-container">
                    <img
                        className="header-image"
                        src={videoHeaderImageUrl}
                        alt={videoTitle}
                    />
                </div>
                <div className="info">
                    <div className="left">
                        <div className="duration">
                            <FontAwesomeIcon icon={faClock} />{' '}
                            {videoDurationText}
                        </div>
                    </div>
                    {modalContent && (
                        <div className="center priority-click">
                            <div
                                style={{ textDecoration: 'underline' }}
                                onClick={(e) => {
                                    handleOpenHelperModal()
                                    e.stopPropagation()
                                }}
                            >
                                {modalTitle}
                            </div>
                        </div>
                    )}
                    <div
                        className="right priority-click"
                        onClick={(e) => {
                            handleCopy()
                            e.stopPropagation()
                        }}
                    >
                        <FontAwesomeIcon icon={faLink} />
                    </div>
                </div>
            </div>
            <ReactModal
                isOpen={showHelperModal}
                contentLabel={modalTitle}
                onRequestClose={handleCloseHelperModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
            >
                <img
                    src={cross}
                    className="img-close-modal-icon-internal"
                    alt="Lukk"
                    onClick={handleCloseHelperModal}
                />

                {modalContent}
            </ReactModal>
            <ReactModal
                isOpen={showModal}
                contentLabel={videoTitle}
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    },
                    content: {
                        backgroundColor: 'transparent',
                        padding: '0',
                        border: '0',
                        position: 'fixed',
                        top: '50%',
                        bottom: '50%',
                        inset: '3rem',
                    },
                }}
            >
                <VideoPlayer
                    videoUrl={videoUrl}
                    closeModalHandler={handleCloseModal}
                />
            </ReactModal>
        </div>
    )
}

export default VideoThumb
